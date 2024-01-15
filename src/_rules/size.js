import { handler as h, resolveBreakpoints, resolveVerticalBreakpoints, resolveArbitraryValues } from '#utils';

const sizeMapping = { h: 'height', w: 'width' };
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
    case 'prose':
      return '65ch';
  }
  return h.global.auto.fraction(prop);
}

export const sizes = [
  [
    /^(min-|max-)?([wh])-(.+)$/,
    ([, minmax, wOrH, s], { theme }) => ({ [getPropName(minmax, wOrH)]: getSizeValue(minmax, wOrH, theme, s) }),
    {
      autocomplete: ['(w|h)-$width|height|maxWidth|maxHeight|minWidth|minHeight', '(max|min)-(w|h)-$width|height|maxWidth|maxHeight|minWidth|minHeight'],
    },
  ],
  [/^(min-|max-)?(h)-screen-(.+)$/, ([, m, w, s], context) => ({ [getPropName(m, w)]: resolveVerticalBreakpoints(context)?.[s] })],
  [
    /^(min-|max-)?(w)-screen-(.+)$/,
    ([, m, w, s], context) => ({ [getPropName(m, w)]: resolveBreakpoints(context)?.[s] }),
    {
      autocomplete: ['(w|h)-screen', '(min|max)-(w|h)-screen', 'h-screen-$verticalBreakpoints', '(min|max)-h-screen-$verticalBreakpoints', 'w-screen-$breakpoints', '(min|max)-w-screen-$breakpoints'],
    },
  ],
  [/^(min-|max-)?([wh])-\[(.+)(rem|px)?]$/, ([, minmax, wh, value, unit], context) => ({ [getPropName(minmax, wh)]: resolveArbitraryValues(value, unit, context) })],
];
