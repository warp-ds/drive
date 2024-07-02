const blurSize = {
  none: '0',
  s: '2px',
  default: '4px',
  m: '8px',
  l: '12px',
  xl: '16px',
  xxl: '24px',
  xxxl: '40px',
};

export const backdrop = [
  [/^backdrop-blur$/, () => ({ '-webkit-backdrop-filter': `blur(${blurSize.default})`, 'backdrop-filter': `blur(${blurSize.default})` })],
  [
    /^backdrop-blur-(none|s|m|l|xl|xxl|xxxl)$/,
    ([, size]) => ({ '-webkit-backdrop-filter': `blur(${blurSize[size]})`, 'backdrop-filter': `blur(${blurSize[size]})` }),
  ],
];
