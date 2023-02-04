export const variantSpaceAndDivide = (matcher) => {
  if (/^space-?([xy])-?(-?.+)$/.test(matcher) || matcher.startsWith('divide-')) {
    return {
      matcher,
      selector: (input) => {
        return `${input}>:not([hidden])~:not([hidden])`
      },
    }
  }
}
