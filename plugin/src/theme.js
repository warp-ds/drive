const breakpoints = {
  // sm hits typical mobiles in landscape and up
  sm: '480px',
  // md hits tablets and up
  md: '768px',
  // lg hits full desktop-width and up
  lg: '990px',
}

const divideByTen = n => {
  const roundedDecimal = Number((n / 10).toFixed(1)) // avoid any JS maths stupidity
  return Math.round(roundedDecimal) === roundedDecimal ? Math.round(roundedDecimal) : roundedDecimal
}
export const spaceBase = [0, 1, 2, 4, 6, 8, 10, 12, 14, 16, 20, 24, 28, 32, 40, 44, 48, 56, 64, 80, 96, 112, 128, 144]
const spacingInPx = spaceBase.reduce((acc, e) => (acc[e] = `${e}px`, acc), {})
const spacingInRem = spaceBase.reduce((acc, e) => (acc[e] = `${divideByTen(e)}rem`, acc), {})

const zIndex = {
  0: "0",
  10: "10",
  20: "20",
  30: "30",
  40: "40",
  50: "50",
}

export const useTheme = (opts = {}) => ({
  usingPixels: !!opts.pxSpacing,
  breakpoints,
  spacing: opts.usePixels ? spacingInPx : spacingInRem,
  zIndex
})
