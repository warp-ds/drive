// this lives in preset-wind and isn't explicitly exported

export const variantSpaceAndDivide = (matcher) => {
  if (matcher.startsWith('_')) return
  if (/^space-?([xy])-?(-?.+)$/.test(matcher) || /divide-/.test(matcher)) {
    return {
      matcher,
      selector: (input) => `${input}>:not([hidden])~:not([hidden])`
    }
  }
}
