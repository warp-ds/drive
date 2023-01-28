import { handler as h } from '#utils'

export const display = [
  ['flex', { display: 'flex' }],
  ['inline-flex', { display: 'inline-flex' }],
  ['grid', { display: 'grid' }],
  ['inline-grid', { display: 'inline-grid' }],
  ['inline', { display: 'inline' }],
  ['block', { display: 'block' }],
  ['inline-block', { display: 'inline-block' }],
  ['contents', { display: 'contents' }],
  ['flow-root', { display: 'flow-root' }],
  ['list-item', { display: 'list-item' }],
  ['hidden', { display: 'none' }],
  // unset, revert, inherit
  [/^display-(.+)$/, ([, c]) => ({ display: h.bracket.cssvar.global(c) || c })],
]
