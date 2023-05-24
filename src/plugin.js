import { preflights } from '#preflights';
import { rules } from '#rules';
import { shortcuts } from '#shortcuts';
import { variants } from '#variants';
import { useTheme } from '#theme';
import { postprocess } from '#postprocess';

/**
 * @typedef PluginOptions
 * @type {Object}
 * @property {boolean} development // not in use yet
 * @property {boolean} externalizeClasses - force external or 'core' classes to be included/excluded
 * @property {boolean} usePixels - use pixel spacing instead of rem
 */

// TODO: improve generic type passed here
/** @type {import('@unocss/core').Preset<object>} */
export function presetWarp (options = {}) {
  const isDevelopmentMode = options.development;
  const externalizeClasses = options.externalizeClasses ?? !isDevelopmentMode;
  const externalClasses = options.externalClasses ?? []; // will possibly be our own list in the future
  const theme = useTheme(options);
  return {
    name: '@warp-ds/uno',
    theme,
    rules,
    variants,
    preflights: isDevelopmentMode ? [] : preflights,
    postprocess: postprocess(externalizeClasses, externalClasses),
    shortcuts,
  };
}

export default presetWarp;
