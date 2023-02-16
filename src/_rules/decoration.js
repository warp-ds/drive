export const textDecorations = [
  [/^(underline|line-through)$/, ([, s]) => ({ 'text-decoration-line': s })],
  ['no-underline', { 'text-decoration': 'none' }],
];