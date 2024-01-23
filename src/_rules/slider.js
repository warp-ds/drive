// Deprecated - DO NOT USE! - Replace with arbitrary box-shadow (box-[---token]) to handle theming

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
