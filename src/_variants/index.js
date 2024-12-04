import {
  variantBreakpoints,
  variantImportant,
  variantNegative,
  variantTaggedPseudoClasses,
  variantPseudoClassFunctions,
  variantPseudoClassesAndElements,
  variantPartClasses,
  variantCombinators,
} from '@unocss/preset-mini/variants';

import { variantLastChild } from './lastChild.js';
import { variantSpaceAndDivide } from './spaceAndDivide.js';

export const variants = [
  variantLastChild,
  variantBreakpoints(),
  variantImportant(),
  variantNegative,
  variantPseudoClassFunctions(),
  ...variantPseudoClassesAndElements(),
  variantSpaceAndDivide,
  variantPartClasses,
  ...variantTaggedPseudoClasses({ attributifyPseudo: false }),
  ...variantCombinators,
];

export {
  variantLastChild,
  variantBreakpoints,
  variantImportant,
  variantNegative,
  variantPseudoClassFunctions,
  variantPseudoClassesAndElements,
  variantSpaceAndDivide,
  variantTaggedPseudoClasses,
  variantPartClasses,
  variantCombinators,
};
