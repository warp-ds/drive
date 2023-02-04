import { preflights } from '#preflights'
import { rules } from '#rules'
import { variants } from '#variants'
import { useTheme } from '#theme'

const includePreflight = ['base', 'hyper']

/**
 * @typedef PluginOptions
 * @type {Object}
 * @property {string} mode - one of X, Y, Z - modifies CSS output
 * @property {boolean} development // not in use yet
 * @property {boolean} usePixels - use pixel spacing instead of rem
 */

// TODO: improve generic type passed here
/** @type {import('@unocss/core').Preset<object>} */
export function presetWarp (options = {}) {
  const mode = options.mode ?? 'app'
  const hasPreflight = options.usePreflight ?? includePreflight.includes(mode)
  const theme = useTheme(options)
  return {
    name: '@nmp-ds/engine',
    theme,
    rules,
    variants,
    preflights: hasPreflight ? preflights : []
  }
}

export default presetWarp