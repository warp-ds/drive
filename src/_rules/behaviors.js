import { handler as h, makeGlobalStaticRules } from '#utils';

export const appearance = [
  [
    'appearance-none',
    {
      appearance: 'none',
      '-webkit-appearance': 'none',
    },
  ],
];

const willChangeProperty = (prop) => h.properties.auto.global(prop);
export const willChange = [[/^will-change-(.+)/, ([, p]) => ({ 'will-change': willChangeProperty(p) })]];

export const overscrolls = [['overscroll-auto', { 'overscroll-behavior': 'auto' }], ['overscroll-contain', { 'overscroll-behavior': 'contain' }], ['overscroll-none', { 'overscroll-behavior': 'none' }], ...makeGlobalStaticRules('overscroll', 'overscroll-behavior'), ['overscroll-x-auto', { 'overscroll-behavior-x': 'auto' }], ['overscroll-x-contain', { 'overscroll-behavior-x': 'contain' }], ['overscroll-x-none', { 'overscroll-behavior-x': 'none' }], ...makeGlobalStaticRules('overscroll-x', 'overscroll-behavior-x'), ['overscroll-y-auto', { 'overscroll-behavior-y': 'auto' }], ['overscroll-y-contain', { 'overscroll-behavior-y': 'contain' }], ['overscroll-y-none', { 'overscroll-behavior-y': 'none' }], ...makeGlobalStaticRules('overscroll-y', 'overscroll-behavior-y')];

export const scrollBehaviors = [['scroll-auto', { 'scroll-behavior': 'auto' }], ['scroll-smooth', { 'scroll-behavior': 'smooth' }], ...makeGlobalStaticRules('scroll', 'scroll-behavior')];
