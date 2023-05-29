import { entriesToCss } from '@unocss/core';

// TODO: use actual variables and values when those has been defined
const focusRingStyle = entriesToCss(Object.entries({
  outline: '2px solid var(--w-color-focused)',
  'outline-offset': 'var(--w-outline-offset, 1px)',
}));

const outlineNone = entriesToCss(Object.entries({
  outline: 'none',
}));

const focusRingInsetStyle = {
  '--w-outline-offset': '-3px',
};

export const focusRing = [
  [/^focusable$/, ([selector]) => {
    const focus = `.${selector}:focus,.${selector}:focus-visible{${focusRingStyle}}`;
    const notFocusVisible = `.${selector}:not(:focus-visible){${outlineNone}}`;
    return focus + notFocusVisible;
  }],
  ["focusable-inset", { ... focusRingInsetStyle }],
];
