import { warnOnce } from '@unocss/core'
import { handler as h } from '#utils'

const FLEX_BOUNDS = [2, 5]
const inBounds = (v, bounds) => v >= bounds[0] && v <= bounds[1]
const notAvailable = (className, value) => `${className} is not available - this error message needs improvement`
const bound = (cb, bounds) => ([_, d]) => {
  const val = h.bracket(d)
  if (!inBounds(val, bounds)) return warnOnce(notAvailable(_, d))
  cb([_, d])
}

export const flex = [
  // flex
  [
    /^flex-(.*)$/,
    bound(
      ([_, d]) => ({ flex: h.bracket(d) != null ? h.bracket(d).split(' ').map(e => h.cssvar.fraction(e) ?? e).join(' ') : h.cssvar.fraction(d) }),
      FLEX_BOUNDS
    )
  ],
  ['flex-1', { flex: '1 1 0%' }],
  ['flex-auto', { flex: '1 1 auto' }],
  ['flex-initial', { flex: '0 1 auto' }],
  ['flex-none', { flex: 'none' }],
  // shrink/grow/basis
  [/^(?:flex-)?shrink(?:-(.*))?$/, ([, d = '']) => ({ 'flex-shrink': h.bracket.cssvar.number(d) ?? 1 }), { autocomplete: ['flex-shrink-<num>', 'shrink-<num>'] }],
  [/^(?:flex-)?grow(?:-(.*))?$/, ([, d = '']) => ({ 'flex-grow': h.bracket.cssvar.number(d) ?? 1 }), { autocomplete: ['flex-grow-<num>', 'grow-<num>'] }],
  [/^(?:flex-)?basis-(.+)$/, ([, d], { theme }) => ({ 'flex-basis': theme.spacing?.[d] ?? h.bracket.cssvar.auto.fraction.rem(d) }), { autocomplete: ['flex-basis-$spacing', 'basis-$spacing'] }],
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
