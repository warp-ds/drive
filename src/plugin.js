import { preflights } from '#preflights';
import { rules } from '#rules';
import { variants } from '#variants';
import { useTheme } from '#theme';
import { postprocess } from '#postprocess';

/**
 * @typedef PluginOptions
 * @type {Object}
 * @property {boolean} development // not in use yet
 * @property {boolean} usePreflight - force preflights to be included
 * @property {boolean} includeCoreClasses - force core classes to be included
 * @property {boolean} usePixels - use pixel spacing instead of rem
 */

// TODO: improve generic type passed here
/** @type {import('@unocss/core').Preset<object>} */
export function presetWarp (options = {}) {
  const hasPreflight = options.usePreflight ?? options.development
  const externalizeCore = options.includeCoreClasses ?? !options.development
  const theme = useTheme(options);
  return {
    name: '@warp-ds/uno',
    theme,
    rules,
    variants,
    preflights: hasPreflight ? preflights : [],
    postprocess: postprocess(externalizeCore)
  };
}

export default presetWarp;
