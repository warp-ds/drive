// import { preflights } from './preflights.js'
import { formPreflight } from '@warp-ds/form-preflight'
import { twReset } from './_preflights/tw-reset.js'
import { rules } from '#rules'
import { variants } from '#variants'
import { theme } from './theme.js'

const includePreflight = ['base', 'hyper']

// export { theme, colors } from './theme.js'

// TODO: improve generic type passed here
/** @type {import('@unocss/core').Preset<object>} */
export function presetEngine (options = {}) {
  const mode = options.mode ?? 'app'
  const hasPreflight = includePreflight.includes(mode)
  return {
    name: '@nmp-ds/engine',
    theme,
    rules,
    variants,
    preflights: hasPreflight ? [twReset, formPreflight] : []
  }
}

export default presetEngine
