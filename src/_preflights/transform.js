import { entriesToCss } from '@unocss/core';

const transformBaseValues = {
  '--w-rotate': 0,
  '--w-rotate-x': 0,
  '--w-rotate-y': 0,
  '--w-rotate-z': 0,
  '--w-scale-x': 1,
  '--w-scale-y': 1,
  '--w-scale-z': 1,
  '--w-skew-x': 0,
  '--w-skew-y': 0,
  '--w-translate-x': 0,
  '--w-translate-y': 0,
  '--w-translate-z': 0,
};

export const transformBase = {
  layer: 'preflights',
  getCSS() {
    const css = entriesToCss(Object.entries(transformBaseValues));
    return `*,::before,::after{${css}}`;
  },
};
