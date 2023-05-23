const defaultColor = 'rgba(0, 0, 0, .2)';

const boxShadowDefaults = {
  small: `0 1px 6px ${defaultColor}, 0 1px 1px ${defaultColor}`,
  medium: `0 3px 8px ${defaultColor}, 0 3px 6px ${defaultColor}`,
  large: `0 6px 8px ${defaultColor}, 0 10px 20px ${defaultColor}`,
  xlarge: `0 9px 12px ${defaultColor}, 0 14px 28px ${defaultColor}`,
};

export const shadows = [
  [/^shadow-(small|medium|large|xlarge)$/, ([, size]) => ({ 'box-shadow': `var(--w-shadow-${size}, ${boxShadowDefaults[size]})` })],
];

export const dropShadow = [
  [/^drop-shadow$/, () => ({ 'filter': 'drop-shadow(rgba(64, 64, 64, 0.24) 0px 3px 8px) drop-shadow(rgba(64, 64, 64, 0.16) 0px 3px 6px)' })],
];
