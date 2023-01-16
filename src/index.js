// import { preflights } from './preflights.js'
import { rules } from '#rules'
import { variants } from '#variants'
import { theme } from './theme.js'

// export { theme, colors } from './theme.js'

// TODO: improve generic type passed here
/** @type {import('@unocss/core').Preset<object>} */
export function presetEngine (options = {}) {
  return {
    name: '@nmp-ds/engine',
    theme,
    rules,
    variants,
  }
}

export default presetEngine
