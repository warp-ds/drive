import { handler as h, resolveArbitraryValues } from '#utils';

export const flex = [
  // flex
  [
    /^flex-(.*)$/,
    ([_, d]) => ({ flex: h.bracket(d) != null ? h.bracket(d).split(' ').map(e => h.cssvar.fraction(e) ?? e).join(' ') : h.cssvar.fraction(d) }),
  ],
  ['flex-1', { flex: '1 1 0%' }],
  ['flex-auto', { flex: '1 1 auto' }],
  ['flex-initial', { flex: '0 1 auto' }],
  ['flex-none', { flex: 'none' }],
  // shrink/grow/basis
  // grow and shrink have two forms - 'shrink' and 'shrink-N'
  [
    /^shrink(?:-(.*))?$/,
    ([, d = '']) => ({ 'flex-shrink': h.number(d) ?? 1 }),
    { autocomplete: ['shrink-<num>'] },
  ],
  [
    /^grow(?:-(.*))?$/,
    ([, d = '']) => ({ 'flex-grow': h.number(d) ?? 1 }),
    { autocomplete: ['grow-<num>'] },
  ],
  [
    /^basis-(.+)$/,
    ([, d], { theme }) => ({ 'flex-basis': theme.spacing?.[d] ?? h.auto.fraction(d) }),
    { autocomplete: ['basis-$spacing'] },
  ],
  // matching arbitrary values
  [
    /^basis-\[(.\d*)(rem|px|%)?]$/,
    ([, value, unit], context) => ({
      'flex-basis': resolveArbitraryValues(value, unit, context),
    }),
  ],
  // directions
  ['flex-row', { 'flex-direction': 'row' }],
  ['flex-row-reverse', { 'flex-direction': 'row-reverse' }],
  ['flex-col', { 'flex-direction': 'column' }],
  ['flex-col-reverse', { 'flex-direction': 'column-reverse' }],
  // wraps
  ['flex-wrap', { 'flex-wrap': 'wrap' }],
  ['flex-wrap-reverse', { 'flex-wrap': 'wrap-reverse' }],
  ['flex-nowrap', { 'flex-wrap': 'nowrap' }],
];
