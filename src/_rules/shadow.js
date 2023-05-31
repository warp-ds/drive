// TODO: Handle dynamic rgba colors instead of constant colors

const defaultColor = 'rgba(0, 0, 0, .2)';

const boxShadowDefaults = {
  s: `0 1px 6px ${defaultColor}, 0 1px 1px ${defaultColor}`,
  m: `0 3px 8px ${defaultColor}, 0 3px 6px ${defaultColor}`,
  l: `0 6px 8px ${defaultColor}, 0 10px 20px ${defaultColor}`,
  xl: `0 9px 12px ${defaultColor}, 0 14px 28px ${defaultColor}`,
};

export const shadows = [
  [/^shadow-(s|m|l|xl)$/, ([, size]) => ({ 'box-shadow': `var(--w-shadow-${size}, ${boxShadowDefaults[size]})` })],
];

const dropShadowDefaultColor = '64, 64, 64';

const dropShadowDefaults = {
  s: [`drop-shadow(rgba(${dropShadowDefaultColor}, .16) 0 1px 6px) drop-shadow(rgba(${dropShadowDefaultColor}, .24) 0 1px 1px)`],
  m: [`drop-shadow(rgba(${dropShadowDefaultColor}, .24) 0 3px 8px) drop-shadow(rgba(${dropShadowDefaultColor}, .16) 0 3px 6px)`],
  l: [`drop-shadow(rgba(${dropShadowDefaultColor}, .23) 0 6px 8px) drop-shadow(rgba(${dropShadowDefaultColor}, .19) 0 10px 20px)`],
  xl: [`drop-shadow(rgba(${dropShadowDefaultColor}, .22) 0 9px 12px) drop-shadow(rgba(${dropShadowDefaultColor}, .25) 0 14px 28px)`],
};

export const dropShadows = [
  [/^drop-shadow-(s|m|l|xl)$/, ([, size]) => ({ 'filter': dropShadowDefaults[size] })],
];
