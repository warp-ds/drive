import { positionMap, globalKeywords, makeGlobalStaticRules } from '#utils';

export const backgrounds = [
  // size
  ['bg-auto', { 'background-size': 'auto' }],
  ['bg-cover', { 'background-size': 'cover' }],
  ['bg-contain', { 'background-size': 'contain' }],
  // attachments
  ['bg-fixed', { 'background-attachment': 'fixed' }],
  ['bg-local', { 'background-attachment': 'local' }],
  ['bg-scroll', { 'background-attachment': 'scroll' }],
  // positions
  // skip 1 & 2 letters shortcut
  [/^bg-([-\w]{3,})$/, ([, s]) => ({ 'background-position': positionMap[s] })],
  [/^bg-([-\w]{3,})-([-\w]{3,})$/, ([, first, second]) => ({ 'background-position': `${positionMap[first]} ${positionMap[second]}` })],
  // clip
  ['bg-clip-border', { '-webkit-background-clip': 'border-box', 'background-clip': 'border-box' }],
  ['bg-clip-content', { '-webkit-background-clip': 'content-box', 'background-clip': 'content-box' }],
  ['bg-clip-padding', { '-webkit-background-clip': 'padding-box', 'background-clip': 'padding-box' }],
  ['bg-clip-text', { '-webkit-background-clip': 'text', 'background-clip': 'text' }],
  ...globalKeywords.map(keyword => [`bg-clip-${keyword}`, {
    '-webkit-background-clip': keyword,
    'background-clip': keyword,
  }]),
  // repeats
  ['bg-repeat', { 'background-repeat': 'repeat' }],
  ['bg-no-repeat', { 'background-repeat': 'no-repeat' }],
  ['bg-repeat-x', { 'background-repeat': 'repeat-x' }],
  ['bg-repeat-y', { 'background-repeat': 'repeat-y' }],
  ['bg-repeat-round', { 'background-repeat': 'round' }],
  ['bg-repeat-space', { 'background-repeat': 'space' }],
  ...makeGlobalStaticRules('bg-repeat', 'background-repeat'),

  // origins
  ['bg-origin-border', { 'background-origin': 'border-box' }],
  ['bg-origin-padding', { 'background-origin': 'padding-box' }],
  ['bg-origin-content', { 'background-origin': 'content-box' }],
  ...makeGlobalStaticRules('bg-origin', 'background-origin'),
];
