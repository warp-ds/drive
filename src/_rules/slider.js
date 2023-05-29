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

// Solution from Fabric for ouline styling for slider
// TODO: Replace with outline-offset when implemented
export const sliderOutlineNone = [
  [
    /^slider-handle-outline-none$/,
    () => ({
      outline: 'rgba(0, 0, 0, 0) solid 2px',
      'outline-offset': '2px',
    }),
  ],
];
