import { handler as h } from '#utils';

export const internalRules = [
  [/^i-bg-(.+)$/, ([, cssvar]) => ({ 'background-color': h.warpToken(cssvar) })],
  [/^i-text-(.+)$/, ([, cssvar]) => ({ color: h.warpToken(cssvar) })],
  [/^i-border-(.+)$/, ([, cssvar]) => ({ 'border-color': h.warpToken(cssvar) })],
];
