import { globalKeywords, handler as h } from '#utils';

export const display = [
  ['block', { display: 'block' }],
  ['inline-block', { display: 'inline-block' }],
  ['inline', { display: 'inline' }],
  ['flex', { display: 'flex' }],
  ['inline-flex', { display: 'inline-flex' }],
  ['table', { display: 'table' }],
  ['inline-table', { display: 'inline-table' }],
  ['table-caption', { display: 'table-caption' }],
  ['table-cell', { display: 'table-cell' }],
  ['table-column', { display: 'table-column' }],
  ['table-column-group', { display: 'table-column-group' }],
  ['table-footer-group', { display: 'table-footer-group' }],
  ['table-header-group', { display: 'table-header-group' }],
  ['table-row', { display: 'table-row' }],
  ['table-row-group', { display: 'table-row-group' }],
  ['flow-root', { display: 'flow-root' }],
  ['grid', { display: 'grid' }],
  ['inline-grid', { display: 'inline-grid' }],
  ['contents', { display: 'contents' }],
  ['list-item', { display: 'list-item' }],
  ['hidden', { display: 'none' }],
  // unset, revert, inherit
  [/^display-(.+)$/, ([, c]) => ({ display: h.cssvar.global(c) }), { autocomplete: `display-${globalKeywords.join('|')}` }],
];
