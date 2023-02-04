import { handler as h, resolveBreakpoints, resolveVerticalBreakpoints } from '#utils'

const sizeMapping = { h: 'height', w: 'width', };
const getPropName = (minmax, hw) => `${minmax || ''}${sizeMapping[hw]}`;

function getSizeValue(minmax, hw, theme, prop) {
  const str = getPropName(minmax, hw).replace(/-(\w)/g, (_, p) => p.toUpperCase());
  const v = theme[str]?.[prop];
  if (v != null) return v;
  switch (prop) {
    case 'fit':
    case 'max':
    case 'min':
      return `${prop}-content`;
    case 'prose': return '65ch';
  }
  return h.global.auto.fraction(prop);
}

export const sizes = [
  [
    /^(min-|max-)?([wh])-?(.+)$/,
    ([, minmax, wOrH, s], { theme }) => ({ [getPropName(minmax, wOrH)]: getSizeValue(minmax, wOrH, theme, s) }),
    {
      autocomplete: [
        '(w|h)-$width|height|maxWidth|maxHeight|minWidth|minHeight',
        '(max|min)-(w|h)-$width|height|maxWidth|maxHeight|minWidth|minHeight',
      ]
    }
  ],
  [/^(min-|max-)?(h)-screen-(.+)$/, ([, m, w, s], context) => ({ [getPropName(m, w)]: resolveVerticalBreakpoints(context)?.[s] })],
  [/^(min-|max-)?(w)-screen-(.+)$/, ([, m, w, s], context) => ({ [getPropName(m, w)]: resolveBreakpoints(context)?.[s] }), {
    autocomplete: [
      '(w|h)-screen',
      '(min|max)-(w|h)-screen',
      'h-screen-$verticalBreakpoints',
      '(min|max)-h-screen-$verticalBreakpoints',
      'w-screen-$breakpoints',
      '(min|max)-w-screen-$breakpoints',
    ],
  }],
];

function getAspectRatio(prop) {
  if (/^\d+\/\d+$/.test(prop))
  return prop;
  switch (prop) {
    case 'square': return '1/1';
    case 'video': return '16/9';
  }
  return h.bracket.cssvar.global.auto.number(prop);
}
export const aspectRatio = [
  [/^aspect-(?:ratio-)?(.+)$/, ([, d]) => ({ 'aspect-ratio': getAspectRatio(d) }), { autocomplete: ['aspect-(square|video|ratio)', 'aspect-ratio-(square|video)'] }],
];
