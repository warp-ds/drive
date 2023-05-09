const textMap = {
  12: 'xs',
  14: 's',
  16: 'm',
  20: 'ml',
  22: 'l',
  28: 'xl',
  34: 'xxl',
  48: 'xxxl',
};
const lineHeightMap = {
  16: 'xs',
  18: 's',
  22: 'm',
  26: 'ml',
  28: 'l',
  34: 'xl',
  41: 'xxl',
  56: 'xxxl',
};

export const typography = [
  [/^text-(12|14|16|20|22|28|34|48)$/, ([, d]) => ({ 'font-size': `var(--w-font-size-${textMap[d]})`, 'line-height': `var(--w-line-height-${textMap[d]})` })],
  [/^text-(xs|s|m|ml|l|xl|xxl|xxxl)$/, ([, size]) =>
    ({ 'font-size': `var(--w-font-size-${size})`, 'line-height': `var(--w-line-height-${size})` }),
  ],
  [/^leading-(16|18|22|26|28|34|41|56)$/, ([, d]) => ({ 'line-height': `var(--w-line-height-${lineHeightMap[d]})` })],
  [/^leading-(xs|s|m|ml|l|xl|xxl|xxxl)$/, ([, size]) =>
    ({ 'line-height': `var(--w-line-height-${size})` }),
  ],
];
