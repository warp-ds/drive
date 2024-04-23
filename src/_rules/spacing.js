import { directionSize, resolveArbitraryValues, directionMap } from '#utils';

// negatives come in via the negative variant
export const padding = [
  // empty capture group here sets an empty string for 'direction' instead of undefined
  [/^p()-(.\d*)$/, directionSize('padding'), { autocomplete: '(m|p)-<num>' }],
  [/^p([xy])-(.\d*)$/, directionSize('padding')],
  [/^p([rltb])-(.\d*)$/, directionSize('padding'), { autocomplete: '(m|p)<directions>-<num>' }],
  // matching arbitrary values containing 'var(--)', '--', or a (negative) number with optional unit
  [
    /^p-\[(var\(--.+\)|--.+|-?\d+)(rem|px)?]$/,
    ([, value, unit], context) => ({
      padding: resolveArbitraryValues(value, unit, context),
    }),
  ],
  [/^p([xy])-\[(var\(--.+\)|--.+|-?\d+)(rem|px)?]$/, ([, direction, value, unit], context) => directionMap[direction].map((i) => [`padding${i}`, resolveArbitraryValues(value, unit, context)])],
  [/^p([rltb])-\[(var\(--.+\)|--.+|-?\d+)(rem|px)?]$/, ([, direction, value, unit], context) => directionMap[direction].map((i) => [`padding${i}`, resolveArbitraryValues(value, unit, context)])],
];

export const margin = [
  [/^m()-(.+)$/, directionSize('margin')],
  [/^m([xy])-(.+)$/, directionSize('margin')],
  [/^m([rltb])-(.+)$/, directionSize('margin')],
  // matching arbitrary values containing 'var(--)', '--', or a (negative) number with optional unit
  [
    /^m-\[(var\(--.+\)|--.+|-?\d+)(rem|px)?]$/,
    ([, value, unit], context) => ({
      margin: resolveArbitraryValues(value, unit, context),
    }),
  ],
  [/^m([xy])-\[(var\(--.+\)|--.+|-?\d+)(rem|px)?]$/, ([, direction, value, unit], context) => directionMap[direction].map((i) => [`margin${i}`, resolveArbitraryValues(value, unit, context)])],
  [/^m([rltb])-\[(var\(--.+\)|--.+|-?\d+)(rem|px)?]$/, ([, direction, value, unit], context) => directionMap[direction].map((i) => [`margin${i}`, resolveArbitraryValues(value, unit, context)])],
];
