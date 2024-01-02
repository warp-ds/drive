export const opacity = [
  [/^opacity-(\d+)$/, ([, d], { theme }) => ({ opacity: theme.opacity[d] }), { autocomplete: 'opacity-${opacity}' }],
];

export const caretColors = [
  ['caret-inherit', { 'caret-color': 'inherit'  }],
  ['caret-transparent', { 'caret-color': 'transparent' }],
  ['caret-current', { 'caret-color': 'currentColor' }],
];

export const textColors = [
//  ['text-inherit', { 'color': 'inherit' }], // This class currently sets "text-align: inherit;" in align.js
  ['text-transparent', { 'color': 'transparent' }],
  ['text-current', { 'color': 'currentColor' }],
  [/^text-\[(--.+)]$/, ([, p]) => ({ 'color': `var(${p})` })],
  [/^text-\[(var\(--.+\))]$/, ([, p]) => ({ 'color': p })],
];

export const bgColors = [
  ['bg-inherit', { 'background-color': 'inherit' }],
  ['bg-transparent', { 'background-color': 'transparent' }],
  ['bg-current', { 'background-color': 'currentColor' }],
];