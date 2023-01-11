// import { preflights } from './preflights.js'
import { rules } from './rules.js'
// import { theme } from './theme.js'

// export { theme, colors } from './theme.js'

// TODO: improve generic type passed here
/** @type {import('@unocss/core').Preset<object>} */
export function presetEngine (options = {}) {

  return {
    name: '@nmp-ds/engine',
    rules,
  }
}

export default presetEngine
