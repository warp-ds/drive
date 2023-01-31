import { formPreflight } from '@warp-ds/form-preflight'
import { twReset } from './_preflights/tw-reset.js'
import { rules } from '#rules'
import { variants } from '#variants'
import { theme } from '#theme'

const includePreflight = ['base', 'hyper']

// TODO: improve generic type passed here
/** @type {import('@unocss/core').Preset<object>} */
export function presetWarp (options = {}) {
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

export default presetWarp
export { theme } from '#theme'
export { rules } from '#rules'
export { variants } from '#variants'
export * as bounds from '#bounds'
