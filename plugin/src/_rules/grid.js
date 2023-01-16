import { handler as h } from '#utils';

const autoDirection = (prop) => {
  switch (prop) {
    case 'min': return 'min-content';
    case 'max': return 'max-content';
    case 'fr': return 'minmax(0,1fr)';
  }
  return h.bracket.cssvar.auto.rem(prop);
};

export const grid = [
  // span
  ['col-auto', { 'grid-column': 'auto' }],
  ['row-auto', { 'grid-row': 'auto' }],
  ['col-span-full', { 'grid-column': '1 / -1' }],
  ['row-span-full', { 'grid-row': '1 / -1' }],
  [/^row-span-(.+)$/, ([, s]) => ({ 'grid-row': `span ${h.bracket.number(s)}/span ${h.bracket.number(s)}` })],
  [/^col-span-(.+)$/, ([, s]) => ({ 'grid-column': `span ${h.bracket.number(s)}/span ${h.bracket.number(s)}` }), { autocomplete: ['(row|col)-span-<num>'] }],
  // starts & ends
  [/^row-start-(.+)$/, ([, v]) => ({ 'grid-row-start': h.bracket.cssvar(v) ?? v })],
  [/^col-start-(.+)$/, ([, v]) => ({ 'grid-column-start': h.bracket.cssvar(v) ?? v })],
  [/^row-end-(.+)$/, ([, v]) => ({ 'grid-row-end': h.bracket.cssvar(v) ?? v })],
  [/^col-end-(.+)$/, ([, v]) => ({ 'grid-column-end': h.bracket.cssvar(v) ?? v }), { autocomplete: ['(row|col)-(start|end)-<num>'] }],
  // auto flows
  [/^auto-rows-(.+)$/, ([, v]) => ({ 'grid-auto-rows': autoDirection(v) })],
  [/^auto-cols-(.+)$/, ([, v]) => ({ 'grid-auto-columns': autoDirection(v) }), { autocomplete: ['auto-(rows|cols)-<num>'] }],
  ['grid-flow-row', { 'grid-auto-flow': 'row' }],
  ['grid-flow-col', { 'grid-auto-flow': 'column' }],
  ['grid-flow-dense', { 'grid-auto-flow': 'dense' }],
  ['grid-flow-row-dense', { 'grid-auto-flow': 'row dense' }],
  ['grid-flow-col-dense', { 'grid-auto-flow': 'col dense' }],
  // templates
  [/^grid-rows-(.+)$/, ([, v]) => ({ 'grid-template-rows': h.bracket.cssvar(v) })],
  [/^grid-cols-(.+)$/, ([, v]) => ({ 'grid-template-columns': h.bracket.cssvar(v) })],
  [/^grid-rows-minmax-([\w.-]+)$/, ([, d]) => ({ 'grid-template-rows': `repeat(auto-fill,minmax(${d},1fr))` })],
  [/^grid-cols-minmax-([\w.-]+)$/, ([, d]) => ({ 'grid-template-columns': `repeat(auto-fill,minmax(${d},1fr))` })],
  [/^grid-rows-(\d+)$/, ([, d]) => ({ 'grid-template-rows': `repeat(${d},minmax(0,1fr))` })],
  [/^grid-cols-(\d+)$/, ([, d]) => ({ 'grid-template-columns': `repeat(${d},minmax(0,1fr))` }), { autocomplete: ['grid-(rows|cols)-<num>', 'grid-(rows|cols)-none'] }],
  ['grid-rows-none', { 'grid-template-rows': 'none' }],
  ['grid-cols-none', { 'grid-template-columns': 'none' }],
];

