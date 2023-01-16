import { flex } from './flex.js'
import { grid } from './grid.js'
import { display } from './display.js'

export const rules = [
  flex,
  grid,
  display
].flat(1)

export * from './flex.js'
export * from './grid.js'
export * from './display.js'

