import { handler as h } from '#utils';
import { bounded } from '#bounding';
import * as bounds from '#bounds';

const autoDirection = (prop) => {
  switch (prop) {
    case 'min':
      return 'min-content';
    case 'max':
      return 'max-content';
    case 'fr':
      return 'minmax(0,1fr)';
    case 'auto':
      return 'auto';
  }

  // TODO: Emit warning if prop doesnt match
};

const numericHandler = { handler: (d) => h.number.auto(d) };
const numericOrAutoHandler = { handler: (d) => h.number.auto(d) };

export const grid = [
  // span
  ['col-auto', { 'grid-column': 'auto' }],
  ['row-auto', { 'grid-row': 'auto' }],
  ['col-span-full', { 'grid-column': '1 / -1' }],
  ['row-span-full', { 'grid-row': '1 / -1' }],
  [
    /^row-span-(\d+)$/,
    bounded(
      ([, d]) => ({ 'grid-row': `span ${h.number(d)}/span ${h.number(d)}` }),
      bounds.gridRow,
      numericHandler,
    ),
  ],
  [
    /^col-span-(\d+)$/,
    bounded(
      ([, d]) => ({ 'grid-column': `span ${h.number(d)}/span ${h.number(d)}` }),
      bounds.gridCol,
      numericHandler,
    ),
    { autocomplete: ['(row|col)-span-<num>'] },
  ],
  // starts & ends
  [
    /^row-start-(.+)$/,
    bounded(
      ([, d]) => ({ 'grid-row-start': h.number.auto(d) }),
      bounds.gridRow,
      numericOrAutoHandler,
    ),
  ],
  [
    /^col-start-(.+)$/,
    bounded(
      ([, d]) => ({ 'grid-column-start': h.number.auto(d) }),
      bounds.gridCol,
      numericOrAutoHandler,
    ),
  ],
  [
    /^row-end-(.+)$/,
    bounded(
      ([, d]) => ({ 'grid-row-end': h.number.auto(d) }),
      bounds.gridRow,
      numericOrAutoHandler,
    ),
  ],
  [
    /^col-end-(.+)$/,
    bounded(
      ([, d]) => ({ 'grid-column-end': h.number.auto(d) }),
      bounds.gridCol,
      numericOrAutoHandler,
    ),
    { autocomplete: ['(row|col)-(start|end)-<num>'] },
  ],
  // auto flows
  [/^auto-rows-(.+)$/, ([, v]) => ({ 'grid-auto-rows': autoDirection(v) })],
  [
    /^auto-cols-(.+)$/,
    ([, v]) => ({ 'grid-auto-columns': autoDirection(v) }),
    { autocomplete: ['auto-(rows|cols)-<num>'] },
  ],
  ['grid-flow-row', { 'grid-auto-flow': 'row' }],
  ['grid-flow-col', { 'grid-auto-flow': 'column' }],
  ['grid-flow-dense', { 'grid-auto-flow': 'dense' }],
  ['grid-flow-row-dense', { 'grid-auto-flow': 'row dense' }],
  ['grid-flow-col-dense', { 'grid-auto-flow': 'column dense' }],
  // templates
  [/^grid-rows-(.+)$/, ([, v]) => ({ 'grid-template-rows': h.bracket(v) })],
  [/^grid-cols-(.+)$/, ([, v]) => ({ 'grid-template-columns': h.bracket(v) })],
  [
    /^grid-rows-minmax-([\w.-]+)$/,
    ([, d]) => ({ 'grid-template-rows': `repeat(auto-fill,minmax(${d},1fr))` }),
  ],
  [
    /^grid-cols-minmax-([\w.-]+)$/,
    ([, d]) => ({
      'grid-template-columns': `repeat(auto-fill,minmax(${d},1fr))`,
    }),
  ],
  [
    /^grid-rows-(\d+)$/,
    bounded(
      ([, d]) => ({ 'grid-template-rows': `repeat(${d},minmax(0,1fr))` }),
      bounds.gridRow,
      numericHandler,
    ),
  ],
  [
    /^grid-cols-(\d+)$/,
    bounded(
      ([, d]) => ({ 'grid-template-columns': `repeat(${d},minmax(0,1fr))` }),
      bounds.gridCol,
      numericHandler,
    ),
    { autocomplete: ['grid-(rows|cols)-<num>', 'grid-(rows|cols)-none'] },
  ],
  ['grid-rows-none', { 'grid-template-rows': 'none' }],
  ['grid-cols-none', { 'grid-template-columns': 'none' }],
];
