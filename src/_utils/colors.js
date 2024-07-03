import { escapeRegExp } from '@unocss/core';

import { getComponents } from './getComponents.js';

const cssColorFunctions = ['hsl', 'hsla', 'hwb', 'lab', 'lch', 'oklab', 'oklch', 'rgb', 'rgba'];
const alphaPlaceholders = ['%alpha', '<alpha-value>'];
const alphaPlaceholdersRE = new RegExp(alphaPlaceholders.map((v) => escapeRegExp(v)).join('|'));
export function hex2rgba(hex = '') {
  const color = parseHexColor(hex);
  if (color != null) {
    const { components, alpha } = color;
    if (alpha == null) return components;
    return [...components, alpha];
  }
}
export function parseCssColor(str = '') {
  const color = parseColor(str);
  if (color == null || color === false) return;
  const { type: casedType, components, alpha } = color;
  const type = casedType.toLowerCase();
  if (components.length === 0) return;
  if (['rgba', 'hsla'].includes(type) && alpha == null) return;
  if (cssColorFunctions.includes(type) && ![1, 3].includes(components.length)) return;
  return {
    type,
    components: components.map((c) => (typeof c === 'string' ? c.trim() : c)),
    alpha: typeof alpha === 'string' ? alpha.trim() : alpha,
  };
}
export function colorOpacityToString(color) {
  const alpha = color.alpha ?? 1;
  return typeof alpha === 'string' && alphaPlaceholders.includes(alpha) ? 1 : alpha;
}
export function colorToString(color, alphaOverride) {
  if (typeof color === 'string') return color.replace(alphaPlaceholdersRE, `${alphaOverride ?? 1}`);
  const { components } = color;
  let { alpha, type } = color;
  alpha = alphaOverride ?? alpha;
  type = type.toLowerCase();
  // Comma separated functions
  if (['hsla', 'hsl', 'rgba', 'rgb'].includes(type)) {
    return `${type.replace('a', '')}a(${components.join(',')}${alpha == null ? '' : `,${alpha}`})`;
  }
  alpha = alpha == null ? '' : ` / ${alpha}`;
  if (cssColorFunctions.includes(type)) return `${type}(${components.join(' ')}${alpha})`;
  return `color(${type} ${components.join(' ')}${alpha})`;
}
function parseColor(str) {
  if (!str) return;
  let color = parseHexColor(str);
  if (color != null) return color;
  color = cssColorKeyword(str);
  if (color != null) return color;
  color = parseCssCommaColorFunction(str);
  if (color != null) return color;
  color = parseCssSpaceColorFunction(str);
  if (color != null) return color;
  color = parseCssColorFunction(str);
  if (color != null) return color;
}
function parseHexColor(str) {
  const [, body] = str.match(/^#([\da-f]+)$/i) || [];
  if (!body) return;
  switch (body.length) {
    case 3:
    case 4:
      const digits = Array.from(body, (s) => Number.parseInt(s, 16)).map((n) => (n << 4) | n);
      return {
        type: 'rgb',
        components: digits.slice(0, 3),
        alpha: body.length === 3 ? undefined : Math.round((digits[3] / 255) * 100) / 100,
      };
    case 6:
    case 8:
      const value = Number.parseInt(body, 16);
      return {
        type: 'rgb',
        components:
          body.length === 6
            ? [(value >> 16) & 0xff, (value >> 8) & 0xff, value & 0xff]
            : [(value >> 24) & 0xff, (value >> 16) & 0xff, (value >> 8) & 0xff],
        alpha: body.length === 6 ? undefined : Math.round(((value & 0xff) / 255) * 100) / 100,
      };
  }
}
function cssColorKeyword(str) {
  const color = {
    rebeccapurple: [102, 51, 153, 1],
  }[str];
  if (color != null) {
    return {
      type: 'rgb',
      components: color.slice(0, 3),
      alpha: color[3],
    };
  }
}
function parseCssCommaColorFunction(color) {
  const match = color.match(/^(rgb|rgba|hsl|hsla)\((.+)\)$/i);
  if (!match) return;
  const [, type, componentString] = match;
  // With min 3 (rgb) and max 4 (rgba), try to get 5 components
  const components = getComponents(componentString, ',', 5);
  if (components) {
    if ([3, 4].includes(components.length)) {
      return {
        type,
        components: components.slice(0, 3),
        alpha: components[3],
      };
    } else if (components.length !== 1) {
      return false;
    }
  }
}
const cssColorFunctionsRe = new RegExp(`^(${cssColorFunctions.join('|')})\\((.+)\\)$`, 'i');
function parseCssSpaceColorFunction(color) {
  const match = color.match(cssColorFunctionsRe);
  if (!match) return;
  const [, fn, componentString] = match;
  const parsed = parseCssSpaceColorValues(`${fn} ${componentString}`);
  if (parsed) {
    const {
      alpha,
      components: [type, ...components],
    } = parsed;
    return {
      type,
      components,
      alpha,
    };
  }
}
function parseCssColorFunction(color) {
  const match = color.match(/^color\((.+)\)$/);
  if (!match) return;
  const parsed = parseCssSpaceColorValues(match[1]);
  if (parsed) {
    const {
      alpha,
      components: [type, ...components],
    } = parsed;
    return {
      type,
      components,
      alpha,
    };
  }
}
function parseCssSpaceColorValues(componentString) {
  const components = getComponents(componentString, ' ');
  if (!components) return;
  let totalComponents = components.length;
  // (fn 1 2 3 / 4)
  if (components[totalComponents - 2] === '/') {
    return {
      components: components.slice(0, totalComponents - 2),
      alpha: components[totalComponents - 1],
    };
  }
  // (fn 1 2 3/ 4) or (fn 1 2 3 /4)
  if (
    components[totalComponents - 2] != null &&
    (components[totalComponents - 2].endsWith('/') || components[totalComponents - 1].startsWith('/'))
  ) {
    const removed = components.splice(totalComponents - 2);
    components.push(removed.join(' '));
    --totalComponents;
  }
  // maybe (fn 1 2 3/4)
  const withAlpha = getComponents(components[totalComponents - 1], '/', 2);
  if (!withAlpha) return;
  // without alpha
  if (withAlpha.length === 1 || withAlpha[withAlpha.length - 1] === '') return { components };
  const alpha = withAlpha.pop();
  components[totalComponents - 1] = withAlpha.join('/');
  return {
    components,
    alpha,
  };
}
