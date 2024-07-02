import { escapeSelector, entriesToCss } from '@unocss/core';

import { handler as h } from '#utils';

const childStyles = entriesToCss(
  Object.entries({
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
  }),
);

export const arBackport = [
  [
    /^aspect-(.+)$/,
    ([_selector, d]) => {
      const selector = escapeSelector(_selector);
      const ratioAsPercentage = h.inverseFraction(d);
      const base = `.${selector}{position:relative;padding-bottom:${ratioAsPercentage};}`;
      const child = `.${selector}>*{${childStyles}}`;
      return base + child;
    },
    { autocomplete: ['aspect-(ratio)'] },
  ],
  [
    /^aspect-(video|square)$/,
    ([_selector, v]) => {
      const fraction = v === 'video' ? '16/9' : '1/1';
      const ratioAsPercentage = h.inverseFraction(fraction);
      const base = `.${_selector}{position:relative;padding-bottom:${ratioAsPercentage};}`;
      const child = `.${_selector}>*{${childStyles}}`;
      return base + child;
    },
    { autocomplete: ['aspect-(ratio)'] },
  ],
  ['aspect-ratio', { 'aspect-ratio': 'auto' }],
];
