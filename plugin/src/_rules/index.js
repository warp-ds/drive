import { verticalAligns, textAligns } from './align.js'
import { flex } from './flex.js'
import { grid } from './grid.js'
import { opacity } from './color.js'
import { display } from './display.js'
import { lineClamp } from './line-clamp.js'
import { paddings, margins } from './spacing.js'

export const rules = [
  verticalAligns, textAligns,
  flex,
  grid,
  opacity,
  display,
  lineClamp,
  paddings, margins,
].flat(1)

export * from './align.js'
export * from './flex.js'
export * from './grid.js'
export * from './color.js'
export * from './display.js'
export * from './spacing.js'
