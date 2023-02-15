export const opacity = [
  [/^opacity-?(\d+)$/, ([, d], { theme }) => ({ opacity: theme.opacity[d] }), { autocomplete: 'opacity-${opacity}' }],
];
