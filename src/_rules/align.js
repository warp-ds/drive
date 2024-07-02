import { globalKeywords } from '#utils';

const verticalAlignAlias = {
  mid: 'middle',
  base: 'baseline',
  btm: 'bottom',
  baseline: 'baseline',
  top: 'top',
  start: 'top',
  middle: 'middle',
  bottom: 'bottom',
  end: 'bottom',
  'text-top': 'text-top',
  'text-bottom': 'text-bottom',
  sub: 'sub',
  super: 'super',
  ...Object.fromEntries(globalKeywords.map((x) => [x, x])),
};

export const verticalAligns = [
  [
    /^align-([-\w]+)$/,
    ([, v]) => ({ 'vertical-align': verticalAlignAlias[v] }),
    { autocomplete: `align-(${Object.keys(verticalAlignAlias).join('|')})` },
  ],
];

export const textAligns = ['center', 'left', 'right', 'justify', 'start', 'end', ...globalKeywords].map((v) => [
  `text-${v}`,
  { 'text-align': v },
]);
