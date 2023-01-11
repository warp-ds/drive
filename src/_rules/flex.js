import { handler as h } from '../utils';

export const flex = [
  // display
  ['flex', { display: 'flex' }],
  ['inline-flex', { display: 'inline-flex' }],
  // flex
  [
    /^flex-(.*)$/,
    ([, d]) => ({
      flex: h.bracket(d) != null ? h.bracket(d).split(' ').map(e => h.cssvar.fraction(e) ?? e).join(' ') : h.cssvar.fraction(d)
    })
  ],
  ['flex-1', { flex: '1 1 0%' }],
  ['flex-auto', { flex: '1 1 auto' }],
  ['flex-initial', { flex: '0 1 auto' }],
  ['flex-none', { flex: 'none' }],
]
