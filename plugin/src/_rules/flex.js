import { handler as h } from '#utils'
import { bounded } from '#bounding'

const GROW_SHRINK_BOUNDS = [0, 5]
// const FLEX_BOUNDS = [2, 5]

export const flex = [
  // flex
  [
    // TODO: how should we bound this rule?
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
    bounded(
      ([, d = '']) => ({ 'flex-shrink': h.bracket.cssvar.number(d) ?? 1 }),
      GROW_SHRINK_BOUNDS, { nullable: true }
    ),
    { autocomplete: ['shrink-<num>'] }
  ],
  [
    /^grow(?:-(.*))?$/,
    ([, d = '']) => ({ 'flex-grow': h.bracket.cssvar.number(d) ?? 1 }),
    { autocomplete: ['grow-<num>'] }
  ],
  [
    /^basis-(.+)$/,
    ([, d], { theme }) => ({ 'flex-basis': theme.spacing?.[d] ?? h.bracket.cssvar.auto.fraction.rem(d) }),
    { autocomplete: ['basis-$spacing'] }
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
]
