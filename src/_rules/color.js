export const opacity = [
  [/^opacity-(\d+)$/, ([, d], { theme }) => ({ opacity: theme.opacity[d] }), { autocomplete: 'opacity-${opacity}' }],
];

export const textColors = [
  ['text', { color: 'var(--w-text-color)' }],
  ['text-inverted', { color: 'var(--w-text-color-inverted)' }],
  ['text-inverted-subtle', { color: 'var(--w-text-color-inverted-subtle)' }],
  ['text-subtle', { color: 'var(--w-text-color-subtle)' }],
];

export const bgColors = [
  ['bg', { 'background-color': 'var(--w-background-color)' }],
  ['bg-subtle', { 'background-color': 'var(--w-background-color-subtle)' }],
];