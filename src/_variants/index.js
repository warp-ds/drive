import {
  variantBreakpoints,
  variantImportant,
  variantNegative,
  variantTaggedPseudoClasses,
  variantPseudoClassFunctions,
  variantPseudoClassesAndElements,
} from '@unocss/preset-mini/variants';
import { variantSpaceAndDivide } from './spaceAndDivide.js';

export const variants = [
  (matcher) => {
    if (!matcher.startsWith('last-child:')) { return matcher; };
    return {
      matcher: matcher.slice(11),
      selector: () => `.last-child\\:mb-0>:last-child`,
    };
  },
  variantBreakpoints(),
  variantImportant(),
  variantNegative,
  variantPseudoClassFunctions(),
  variantPseudoClassesAndElements(),
  variantSpaceAndDivide,
  ...variantTaggedPseudoClasses({ attributifyPseudo: false }),
];

export {
  variantBreakpoints,
  variantImportant,
  variantNegative,
  variantPseudoClassFunctions,
  variantPseudoClassesAndElements,
  variantSpaceAndDivide,
  variantTaggedPseudoClasses,
};
