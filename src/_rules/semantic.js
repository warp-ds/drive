import { handler as h } from '#utils';

export const semanticRules = [
  [/^s-bg-(.+)$/, ([, cssvar]) => ({ 'background-color': h.semanticToken(`background-${cssvar}`) })],
  [/^s-text-(.+)$/, ([, cssvar]) => ({ color: h.semanticToken(`text-${cssvar}`) })],
  [/^s-border-(.+)$/, ([, cssvar]) => ({ 'border-color': h.semanticToken(`border-${cssvar}`) })],
];
