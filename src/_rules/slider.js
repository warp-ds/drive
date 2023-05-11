import { entriesToCss } from '@unocss/core';

// Hardcoded styling for slider border shadow, will be modified and handled with correct color variables at a later stage
// TODO: Make the colors for the slider shadow themeable
const defaultColor = 'rgba(0, 0, 0, .08)';
const sliderStates = {
  active: '0 0 0 8px',
  hover: '0 0 0 6px',
};

export const sliderHandleShadow = [
  [
    /^slider-handle-shadow-(active|hover)$/,
    ([, state]) => ({
      'box-shadow': `${sliderStates[state]} ${defaultColor}`,
    }),
  ],
];

export const sliderOutlineStyles = entriesToCss(Object.entries({
  outline: '2px solid rgba(0, 0, 0, 0)',
  'outline-offset': '2px',
}));

export const sliderOutlineNone = [
  [
    /^slider-outline-none$/,
    () => (sliderOutlineStyles),
  ],
];
