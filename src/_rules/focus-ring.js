import { entriesToCss, escapeSelector } from '@unocss/core';

// TODO: Remove deprecated fallback (--w-s-color-focused) in v2
const focusRingStyle = entriesToCss(
  Object.entries({
    outline: '2px solid var(--w-s-color-border-focused, var(--w-s-color-focused))',
    'outline-offset': 'var(--w-outline-offset, 1px)',
  }),
);

const outlineNone = entriesToCss(
  Object.entries({
    outline: 'none',
  }),
);

const focusRingInsetStyle = {
  '--w-outline-offset': '-3px',
};

const combinatorsByTag = {
  group: ' ',
  peer: '~',
  parent: '>',
  previous: '+',
};

export const focusRing = [
  [
    /focusable$/,
    ([], { rawSelector: selectorWithVariant, currentSelector }) => {
      if (currentSelector !== selectorWithVariant) {
        const escapedSelector = escapeSelector(selectorWithVariant);
        const tagLabel = selectorWithVariant?.split('-')?.[0] ?? '';
        const combinator = combinatorsByTag[tagLabel];
        if (!!combinator) {
          const focus = `.${tagLabel}:focus${combinator}.${escapedSelector},.${tagLabel}:focus-visible${combinator}.${escapedSelector}{${focusRingStyle}}`;
          const notFocusVisible = `.${tagLabel}:not(:focus-visible)${combinator}.${escapedSelector}{${outlineNone}}`;
          return focus + notFocusVisible;
        }
        return `.${escapedSelector}:${selectorWithVariant.split(':')?.[0]}{${focusRingStyle}}`;
      } else {
        const escapedCurrentSelector = escapeSelector(currentSelector);
        const focus = `.${escapedCurrentSelector}:focus,.${escapedCurrentSelector}:focus-visible{${focusRingStyle}}`;
        const notFocusVisible = `.${escapedCurrentSelector}:not(:focus-visible){${outlineNone}}`;
        return focus + notFocusVisible;
      }
    },
  ],
  ['focusable-inset', { ...focusRingInsetStyle }],
];
