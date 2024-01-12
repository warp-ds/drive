import { directionSize, resolveArbitraryValues, directionMap } from '#utils';

// negatives come in via the negative variant
export const padding = [
  // empty capture group here sets an empty string for 'direction' instead of undefined
  [/^p()-(.\d*)$/, directionSize('padding'), { autocomplete: '(m|p)-<num>' }],
  [/^p([xy])-(.\d*)$/, directionSize('padding')],
  [/^p([rltb])-(.\d*)$/, directionSize('padding'), { autocomplete: '(m|p)<directions>-<num>' }],
  // matching arbitrary values
  [
    /^p-\[(.\d*)(rem|px)?]$/,
    ([, value, unit], context) => ({
      padding: resolveArbitraryValues(value, unit, context),
    }),
  ],
  [/^p([xy])-\[(.\d*)(rem|px)?]$/, ([, direction, value, unit], context) => directionMap[direction].map((i) => [`padding${i}`, resolveArbitraryValues(value, unit, context)])],
  [/^p([rltb])-\[(.\d*)(rem|px)?]$/, ([, direction, value, unit], context) => directionMap[direction].map((i) => [`padding${i}`, resolveArbitraryValues(value, unit, context)])],
];

export const margin = [
  [/^m()-(.+)$/, directionSize('margin')],
  [/^m([xy])-(.+)$/, directionSize('margin')],
  [/^m([rltb])-(.+)$/, directionSize('margin')],
  // matching arbitrary values
  [
    /^m-\[(.\d*)(rem|px)?]$/,
    ([, value, unit], context) => ({
      margin: resolveArbitraryValues(value, unit, context),
    }),
  ],
  [/^m([xy])-\[(.\d*)(rem|px)?]$/, ([, direction, value, unit], context) => directionMap[direction].map((i) => [`margin${i}`, resolveArbitraryValues(value, unit, context)])],
  [/^m([rltb])-\[(.\d*)(rem|px)?]$/, ([, direction, value, unit], context) => directionMap[direction].map((i) => [`margin${i}`, resolveArbitraryValues(value, unit, context)])],
];
