import {
  variantBreakpoints,
  variantImportant,
  variantNegative,
  variantTaggedPseudoClasses,
  variantPseudoClassFunctions,
  variantPseudoClassesAndElements,
  variantPartClasses,
  variantCombinators,
  variantDataAttribute,
  variantAria,
  variantVariables,
  variantColorsMediaOrClass,
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
  variantDataAttribute,
  variantAria,
  variantVariables,
  ...variantColorsMediaOrClass({ dark: { dark: ['[data-w-theme=dark]'], light: ['[data-w-theme=light]'] } }),
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
  variantDataAttribute,
  variantAria,
  variantVariables,
  variantColorsMediaOrClass,
};
