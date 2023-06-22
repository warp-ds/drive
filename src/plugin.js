import { classes } from '@warp-ds/component-classes/classes';
import { preflights } from '#preflights';
import { rules } from '#rules';
import { shortcuts } from '#shortcuts';
import { variants } from '#variants';
import { useTheme } from '#theme';
import { postprocess } from '#postprocess';
/**
 * @typedef PluginOptions
 * @type {Object}
 * @property {boolean} development // internal use only - force preflights to be excluded and no externalized classes will be processed
 * @property {boolean} externalizeClasses - force external or 'core' classes to be included/excluded
 * @property {boolean} usePixels - use pixel spacing instead of rem
 */

// TODO: improve generic type passed here
/** @type {import('@unocss/core').Preset<object>} */
export function presetWarp (options = {}) {
  const externalizeClasses = options.externalizeClasses ?? !options.development;
  const externalClasses = options.externalClasses ?? classes;
  const theme = useTheme(options);
  return {
    name: '@warp-ds/uno',
    theme,
    rules,
    variants,
    preflights: options.development ? [] : preflights,
    postprocess: postprocess(externalizeClasses, externalClasses),
    shortcuts,
  };
}

export default presetWarp;
