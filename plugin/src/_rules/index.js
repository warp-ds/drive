import { flex } from './flex.js'
import { grid } from './grid.js'
import { display } from './display.js'
import { paddings, margins } from './spacing.js'

export const rules = [
  flex,
  grid,
  display,
  paddings, margins,
].flat(1)

export * from './flex.js'
export * from './grid.js'
export * from './display.js'
export * from './spacing.js'
