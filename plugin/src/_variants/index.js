import { variantBreakpoints } from './breakpoints.js'
import { variantImportant } from './important.js'
import { variantNegative } from './negative.js'
import { variantPseudoClassFunctions, variantPseudoClassesAndElements, variantTaggedPseudoClasses } from './pseudo.js'

export const variants = [
  variantBreakpoints,
  variantImportant,
  variantNegative,
  variantPseudoClassFunctions,
  variantPseudoClassesAndElements,
  ...variantTaggedPseudoClasses,
]

export * from './breakpoints.js'
export * from './important.js'
export * from './negative.js'
