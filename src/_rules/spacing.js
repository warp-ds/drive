import { directionSize } from '#utils';

// negatives come in via the negative variant
// bounding is done via the directionSize function
export const padding = [
  // empty capture group here sets an empty string for 'direction' instead of undefined
  [/^p()-(.+)$/, directionSize('padding'), { autocomplete: '(m|p)-<num>' }],
  [/^p([xy])-(.+)$/, directionSize('padding')],
  [/^p([rltb])-(.+)$/, directionSize('padding'), { autocomplete: '(m|p)<directions>-<num>' }],
];

export const margin = [
  [/^m()-(.+)$/, directionSize('margin')],
  [/^m([xy])-(.+)$/, directionSize('margin')],
  [/^m([rltb])-(.+)$/, directionSize('margin')],
];
