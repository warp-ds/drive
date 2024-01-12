import { handler as h, insetMap, makeGlobalStaticRules, resolveArbitraryValues } from '#utils';
import { warnOnce } from '@unocss/core';

export const positions = [[/^(static|fixed|absolute|relative|sticky)$/, ([, v]) => ({ position: v })]];

export const orders = [
  ['order-first', { order: '-9999' }],
  ['order-last', { order: '9999' }],
  ['order-none', { order: '0' }],

  [/^order-([1-9]|1[0-2])$/, ([, d]) => ({ order: h.number(d) }), { autocomplete: 'order-<num>' }],
  // matching arbitrary values
  [/^order-\[(\d+)]$/, ([, d]) => ({ order: h.number(d) }), { autocomplete: 'order-<num>' }],
];

export const justifies = [
  // contents
  ['justify-start', { 'justify-content': 'flex-start' }],
  ['justify-end', { 'justify-content': 'flex-end' }],
  ['justify-center', { 'justify-content': 'center' }],
  ['justify-between', { 'justify-content': 'space-between' }],
  ['justify-around', { 'justify-content': 'space-around' }],
  ['justify-evenly', { 'justify-content': 'space-evenly' }],
  ...makeGlobalStaticRules('justify', 'justify-content'),

  // items
  ['justify-items-start', { 'justify-items': 'start' }],
  ['justify-items-end', { 'justify-items': 'end' }],
  ['justify-items-center', { 'justify-items': 'center' }],
  ['justify-items-stretch', { 'justify-items': 'stretch' }],
  ...makeGlobalStaticRules('justify-items'),

  // selfs
  ['justify-self-auto', { 'justify-self': 'auto' }],
  ['justify-self-start', { 'justify-self': 'start' }],
  ['justify-self-end', { 'justify-self': 'end' }],
  ['justify-self-center', { 'justify-self': 'center' }],
  ['justify-self-stretch', { 'justify-self': 'stretch' }],
  ...makeGlobalStaticRules('justify-self'),
];

export const alignments = [
  // contents
  ['content-center', { 'align-content': 'center' }],
  ['content-start', { 'align-content': 'flex-start' }],
  ['content-end', { 'align-content': 'flex-end' }],
  ['content-between', { 'align-content': 'space-between' }],
  ['content-around', { 'align-content': 'space-around' }],
  ['content-evenly', { 'align-content': 'space-evenly' }],
  ...makeGlobalStaticRules('content', 'align-content'),

  // items
  ['items-start', { 'align-items': 'flex-start' }],
  ['items-end', { 'align-items': 'flex-end' }],
  ['items-center', { 'align-items': 'center' }],
  ['items-baseline', { 'align-items': 'baseline' }],
  ['items-stretch', { 'align-items': 'stretch' }],
  ...makeGlobalStaticRules('items', 'align-items'),

  // selfs
  ['self-auto', { 'align-self': 'auto' }],
  ['self-start', { 'align-self': 'flex-start' }],
  ['self-end', { 'align-self': 'flex-end' }],
  ['self-center', { 'align-self': 'center' }],
  ['self-stretch', { 'align-self': 'stretch' }],
  ['self-baseline', { 'align-self': 'baseline' }],
  ...makeGlobalStaticRules('self', 'align-self'),
];

export const placements = [
  // contents
  ['place-content-center', { 'place-content': 'center' }],
  ['place-content-start', { 'place-content': 'start' }],
  ['place-content-end', { 'place-content': 'end' }],
  ['place-content-between', { 'place-content': 'space-between' }],
  ['place-content-around', { 'place-content': 'space-around' }],
  ['place-content-evenly', { 'place-content': 'space-evenly' }],
  ['place-content-baseline', { 'place-content': 'baseline' }],
  ['place-content-stretch', { 'place-content': 'stretch' }],
  ...makeGlobalStaticRules('place-content'),

  // items
  ['place-items-start', { 'place-items': 'start' }],
  ['place-items-end', { 'place-items': 'end' }],
  ['place-items-center', { 'place-items': 'center' }],
  ['place-items-stretch', { 'place-items': 'stretch' }],
  ...makeGlobalStaticRules('place-items'),

  // selfs
  ['place-self-auto', { 'place-self': 'auto' }],
  ['place-self-start', { 'place-self': 'start' }],
  ['place-self-end', { 'place-self': 'end' }],
  ['place-self-center', { 'place-self': 'center' }],
  ['place-self-stretch', { 'place-self': 'stretch' }],
  ...makeGlobalStaticRules('place-self'),
];

function handleInsetValue(v, { theme }) {
  return theme.spacing?.[v] ?? h.bracket.fraction.auto(v);
}
function handleInsetValues([, d, v], ctx) {
  const r = handleInsetValue(v, ctx);
  if (r != null && d in insetMap) return insetMap[d].map((i) => [i.slice(1), r]);
}
export const insets = [
  [
    /^inset-(.+)$/,
    ([, v], ctx) => ({ inset: handleInsetValue(v, ctx) }),
    {
      autocomplete: ['inset-$spacing', 'inset-<directions>-$spacing', '(top|left|right|bottom)-$spacing'],
    },
  ],
  [/^inset-([xy])-(.+)$/, handleInsetValues],
  [/^(top|left|right|bottom)-(.+)$/, ([, d, v], ctx) => ({ [d]: handleInsetValue(v, ctx) })],
  //matching arbitrary values
  [
    /^inset-\[(.\d*)(rem|px|%)?]$/,
    ([, value, unit], context) => ({
      inset: resolveArbitraryValues(value, unit, context),
    }),
  ],
  [/^inset-([xy])-\[(.\d*)(rem|px|%)?]$/, ([, direction, value, unit], context) => insetMap[direction].map((i) => [`${i.slice(1)}`, resolveArbitraryValues(value, unit, context)])],
  [
    /^(top|left|right|bottom)-\[(.\d*)(rem|px|%)?]$/,
    ([, direction, value, unit], context) => ({
      [direction]: resolveArbitraryValues(value, unit, context),
    }),
  ],
];

export const floats = [
  // floats
  ['float-left', { float: 'left' }],
  ['float-right', { float: 'right' }],
  ['float-none', { float: 'none' }],
  ...makeGlobalStaticRules('float'),
  // clears
  ['clear-left', { clear: 'left' }],
  ['clear-right', { clear: 'right' }],
  ['clear-both', { clear: 'both' }],
  ['clear-none', { clear: 'none' }],
  ...makeGlobalStaticRules('clear'),
];

function handleZIndexValue(v, { theme }) {
  if (!theme.zIndex?.[v]) return warnOnce(`${v} is not allowed as z-index value`);
  return theme.zIndex[v];
}

export const zIndexes = [
  [/^z-(\d+)$/, ([, v], ctx) => ({ 'z-index': handleZIndexValue(v, ctx) }), { autocomplete: ['z-$zIndex'] }],
  ['z-auto', { 'z-index': 'auto' }],
];

export const boxSizing = [['box-border', { 'box-sizing': 'border-box' }], ['box-content', { 'box-sizing': 'content-box' }], ...makeGlobalStaticRules('box', 'box-sizing')];
