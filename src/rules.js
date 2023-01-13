import { flex } from './_rules/flex.js'
import { display } from './_rules/display.js'

export const rules = [
  flex,
  display
].flat(1)

export * from './_rules/flex.js'
export * from './_rules/display.js'
