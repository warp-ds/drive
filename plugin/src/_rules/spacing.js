import { directionSize } from '#utils'

// negatives come in via the negative variant
// bounding is done via the directionSize function
export const padding = [
  // empty capture group here sets an empty string for 'direction' instead of undefined
  [/^p()-(\d+)$/, directionSize('padding'), { autocomplete: '(m|p)-<num>' }],
  [/^p([xy])-(\d+)$/, directionSize('padding')],
  [/^p([rltb])-(\d+)$/, directionSize('padding'), { autocomplete: '(m|p)<directions>-<num>' }],
]

export const margin = [
  [/^m()-(\d+)$/, directionSize('margin')],
  [/^m([xy])-(\d+)$/, directionSize('margin')],
  [/^m([rltb])-(\d+)$/, directionSize('margin')],
]
