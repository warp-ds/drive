import { lineWidth } from '#theme';
import { resolveArbitraryCssVariable } from '#utils';

const outlineNone = {
  outline: '2px solid transparent',
  'outline-offset': '2px',
};

export const outlineColors = [
  ['outline-inherit', { 'outline-color': 'inherit' }],
  ['outline-transparent', { 'outline-color': 'transparent' }],
  ['outline-current', { 'outline-color': 'currentColor' }],
  [/^outline-\[(var\(--.+\)|--[^\/]+)(\/(0|[1-9][0-9]?|100))?]$/, ([, val, alpha]) => ({ 'outline-color': resolveArbitraryCssVariable(val, alpha) })],
];

export const outlineStyle = [
  ['outline-none', { ...outlineNone }],
  ['outline', { 'outline-style': 'solid' }],
  ['outline-dashed', { 'outline-style': 'dashed' }],
  ['outline-dotted', { 'outline-style': 'dotted' }],
  ['outline-double', { 'outline-style': 'double' }],
];
export const outlineWidth = [[/^outline-(\d+)$/, ([, w]) => ({ ['outline-width']: lineWidth?.[w ?? 1] }), { autocomplete: `outline-(${Object.keys(lineWidth).join('|')})` }]];
export const outlineOffset = [[/^outline-offset-(\d+)$/, ([, w]) => ({ [`outline-offset`]: lineWidth?.[w ?? 1] }), { autocomplete: `outline-offset-(${Object.keys(lineWidth).join('|')})` }]];
