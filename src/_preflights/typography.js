import { entriesToCss } from '@unocss/core';

const fontSizeBaseValues = {
  '--w-font-size-xs': "1.2rem",
  '--w-font-size-s': "1.4rem",
  '--w-font-size-m': "1.6rem",
  '--w-font-size-ml': "2rem",
  '--w-font-size-l': "2.2rem",
  '--w-font-size-xl': "2.8rem",
  '--w-font-size-xxl': "3.4rem",
  '--w-font-size-xxxl': "4.8rem",
};

const lineHeightBaseValues = {
  '--w-line-height-xs': "1.6rem",
  '--w-line-height-s': "1.8rem",
  '--w-line-height-m': "2.2rem",
  '--w-line-height-ml': "2.6rem",
  '--w-line-height-l': "2.8rem",
  '--w-line-height-xl': "3.4rem",
  '--w-line-height-xxl': "4.1rem",
  '--w-line-height-xxxl': "5.6rem",
};

export const typographyBase = {
  layer: 'preflights',
  getCSS() {
    const css = entriesToCss(Object.entries({ ...fontSizeBaseValues, ...lineHeightBaseValues }));
    return `${css}`;
  },
};
