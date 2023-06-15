import { directionMap, handler as h } from '#utils';

export const semanticRules = [
  [/^s-bg-(.+)$/, ([, cssvar]) => ({ 'background-color': h.semanticToken(`background-${cssvar}`) })],
  [/^s-text-(.+)$/, ([, cssvar]) => ({ color: h.semanticToken(`text-${cssvar}`) })],
  [/^s-icon-(.+)$/, ([, cssvar]) => ({ color: h.semanticToken(`icon-${cssvar}`) })],
  [/^s-border-(.+)$/, ([, cssvar]) => ({ 'border-color': h.semanticToken(`border-${cssvar}`) })],
  [/^s-border-([lrtbxy])-(.+)$/, ([, direction, cssvar]) => directionMap[direction]?.map(
    (dir) => [`border${dir}-color`, h.semanticToken(`border-${cssvar}`)],
  )],
];
