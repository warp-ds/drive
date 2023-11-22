import { directionMap, handler as h } from '#utils';

export const semanticRules = [
  [/^s-bg$/, () => ({ 'background-color': h.semanticToken('background') })],
  [/^s-bg-(.+)$/, ([, cssvar]) => ({ 'background-color': h.semanticToken(`background-${cssvar}`) })],
  [/^s-text$/, () => ({ color: h.semanticToken('text') })],
  [/^s-text-(.+)$/, ([, cssvar]) => ({ color: h.semanticToken(`text-${cssvar}`) })],
  [/^s-icon$/, () => ({ color: h.semanticToken('icon') })],
  [/^s-icon-(.+)$/, ([, cssvar]) => ({ color: h.semanticToken(`icon-${cssvar}`) })],
  [/^s-border$/, ([, cssvar]) => ({ 'border-color': h.semanticToken('border') })],
  [/^s-border-(.+)$/, ([, cssvar]) => ({ 'border-color': h.semanticToken(`border-${cssvar}`) })],
  [/^s-border-([lrtbxy])$/, ([, direction]) => directionMap[direction]?.map(
    (dir) => [`border${dir}-color`, h.semanticToken('border')],
  )],
  [/^s-border-([lrtbxy])-(.+)$/, ([, direction, cssvar]) => directionMap[direction]?.map(
    (dir) => [`border${dir}-color`, h.semanticToken(`border-${cssvar}`)],
  )],
  [/^s-outline-(.+)$/, ([, cssvar]) => ({ 'outline-color': h.semanticToken(`border-${cssvar}`) })],
];
