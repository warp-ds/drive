import { handler as h } from '#utils';

export const opacity = [
  [/^opacity-?(\d+)$/, ([, d]) => ({ opacity: h.bracket.percent(d) })],
];
