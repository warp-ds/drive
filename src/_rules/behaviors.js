import { handler as h, makeGlobalStaticRules } from '#utils';

export const appearance = [
  ['appearance-none', {
    'appearance': 'none',
    '-webkit-appearance': 'none',
  }],
];

const willChangeProperty = (prop) => h.properties.auto.global(prop);
export const willChange = [
  [/^will-change-(.+)/, ([, p]) => ({ 'will-change': willChangeProperty(p) })],
];

const listStyles = {
  'disc': 'disc',
  'circle': 'circle',
  'square': 'square',
  'decimal': 'decimal',
  'zero-decimal': 'decimal-leading-zero',
};

export const listStyle = [
  // base
  [
    /^list-(.+)$/,
    ([, alias]) => {
      const style = listStyles[alias];
      if (style) return { 'list-style-type': style };
    },
    { autocomplete: `list-(${Object.keys(listStyles).join('|')})` },
  ],
  // styles
  ['list-outside', { 'list-style-position': 'outside' }],
  ['list-inside', { 'list-style-position': 'inside' }],
  ['list-none', { 'list-style-type': 'none' }],
  ...makeGlobalStaticRules('list', 'list-style-type'),
];

export const overscrolls = [
  ['overscroll-auto', { 'overscroll-behavior': 'auto' }],
  ['overscroll-contain', { 'overscroll-behavior': 'contain' }],
  ['overscroll-none', { 'overscroll-behavior': 'none' }],
  ...makeGlobalStaticRules('overscroll', 'overscroll-behavior'),
  ['overscroll-x-auto', { 'overscroll-behavior-x': 'auto' }],
  ['overscroll-x-contain', { 'overscroll-behavior-x': 'contain' }],
  ['overscroll-x-none', { 'overscroll-behavior-x': 'none' }],
  ...makeGlobalStaticRules('overscroll-x', 'overscroll-behavior-x'),
  ['overscroll-y-auto', { 'overscroll-behavior-y': 'auto' }],
  ['overscroll-y-contain', { 'overscroll-behavior-y': 'contain' }],
  ['overscroll-y-none', { 'overscroll-behavior-y': 'none' }],
  ...makeGlobalStaticRules('overscroll-y', 'overscroll-behavior-y'),
];

export const scrollBehaviors = [
  ['scroll-auto', { 'scroll-behavior': 'auto' }],
  ['scroll-smooth', { 'scroll-behavior': 'smooth' }],
  ...makeGlobalStaticRules('scroll', 'scroll-behavior'),
];
