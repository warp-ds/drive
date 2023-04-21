export const opacity = [
  [/^opacity-(\d+)$/, ([, d], { theme }) => ({ opacity: theme.opacity[d] }), { autocomplete: 'opacity-${opacity}' }],
];

export const caretColors = [
  ['caret-inherit', { 'caret-color': 'inherit'  }],
  ['caret-current', { 'caret-color': 'currentColor' }],
  ['caret-transparent', { 'caret-color': 'transparent' }],
];

export const textColors = [
  ['text', { color: 'var(--w-color-text)' }],
  ['text-inverted', { color: 'var(--w-color-text-inverted)' }],
  ['text-inverted-subtle', { color: 'var(--w-color-text-inverted-subtle)' }],
  ['text-subtle', { color: 'var(--w-color-text-subtle)' }],
];

export const bgColors = [
  ['bg', { 'background-color': 'var(--w-color-background)' }],
  ['bg-subtle', { 'background-color': 'var(--w-color-background-subtle)' }],
  ['bg-inherit', { 'background-color': 'inherit' }],
  ['bg-transparent', { 'background-color': 'transparent' }],
  ['bg-current', { 'background-color': 'currentColor' }],
];