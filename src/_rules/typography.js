import { textMap, lineHeightMap, resolveArbitraryValues } from '#utils';

export const typography = [
  [/^text-(12|14|16|20|22|28|34|48)$/, ([, d]) => ({ 'font-size': `var(--w-font-size-${textMap[d]})`, 'line-height': `var(--w-line-height-${textMap[d]})` })],
  [/^text-(xs|s|m|ml|l|xl|xxl|xxxl)$/, ([, size]) => ({ 'font-size': `var(--w-font-size-${size})`, 'line-height': `var(--w-line-height-${size})` })],
  [/^leading-(16|18|22|26|28|34|41|56)$/, ([, d]) => ({ 'line-height': `var(--w-line-height-${lineHeightMap[d]})` })],
  [/^leading-(xs|s|m|ml|l|xl|xxl|xxxl)$/, ([, size]) => ({ 'line-height': `var(--w-line-height-${size})` })],
  [/^leading-\[(.+)(rem|px)?]$/, ([, value, unit], context) => ({ 'line-height': resolveArbitraryValues(value, unit, context) })],
  ['tabular-nums', { 'font-family': 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif', 'font-variant-numeric': 'tabular-nums' }],
  ['lining-nums', { 'font-variant-numeric': 'lining-nums' }],
  ['ordinal', { 'font-variant-numeric': 'ordinal' }],
  ['slashed-zero', { 'font-variant-numeric': 'slashed-zero' }],
  ['oldstyle-nums', { 'font-variant-numeric': 'oldstyle-nums' }],
  ['proportional-nums', { 'font-variant-numeric': 'proportional-nums' }],
];
