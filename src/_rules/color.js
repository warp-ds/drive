export const opacity = [
  [/^opacity-?(\d+)$/, ([, d], { theme }) => ({ opacity: theme.opacity[d] }), { autocomplete: 'opacity-${opacity}' }],
];

export const textColors = [
  ['text', { color: 'var(--w-text-color)' }],
  ['text-inverted', { color: 'var(--w-text-color-inverted)' }, { autocomplete: 'text-inverted' }],
  ['text-inverted-subtle', { color: 'var(--w-text-color-inverted-subtle)' }, { autocomplete: 'text-inverted-subtle' }],
  ['text-subtle', { color: 'var(--w-text-color-subtle)' }, { autocomplete: 'text-subtle' }],
]

export const bgColors = [
  ['bg', { color: 'var(--w-background-color)' }, { autocomplete: 'bg' }],
  ['bg-subtle', { color: 'var(--w-background-color-subtle)' }, { autocomplete: 'bg-subtle' }],
]