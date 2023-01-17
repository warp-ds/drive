import { directionSize } from '#utils'

// negatives come in via the negative variant
// bounding is done via the directionSize function
export const paddings = [
  [/^pa?()-?(-?.+)$/, directionSize('padding'), { autocomplete: ['(m|p)<num>', '(m|p)-<num>'] }],
  [/^pxy()()$/, directionSize('padding'), { autocomplete: '(m|p)-(xy)' }],
  [/^p([xy])(?:-?(-?.+))?$/, directionSize('padding')],
  [/^p([rltb])(?:-?(-?.+))?$/, directionSize('padding'), { autocomplete: '(m|p)<directions>-<num>' }],
]

export const margins = [
  [/^ma?()-?(-?.+)$/, directionSize('margin')],
  [/^mxy()()$/, directionSize('margin')],
  [/^m([xy])(?:-?(-?.+))?$/, directionSize('margin')],
  [/^m([rltb])(?:-?(-?.+))?$/, directionSize('margin')],
]
