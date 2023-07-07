import { classes } from '@warp-ds/css/component-classes/classes';
import { preflights } from '#preflights';
import { rules } from '#rules';
import { shortcuts } from '#shortcuts';
import { variants } from '#variants';
import { useTheme } from '#theme';
import { postprocess } from '#postprocess';
/**
 * @typedef PluginOptions
 * @type {Object}
 * @property {boolean} development // internal use only - force preflights to be excluded and no external classes will be processed
 * @property {boolean} externalizeClasses - if true forces external or 'core' classes to be excluded from the process.
 * @property {boolean} omitComponentClasses - if true forces component classes to be excluded from the process.
 * @property {Array} externalClasses - list of classes that will not be processed
 * @property {boolean} usePixels - use pixel spacing instead of rem
 */

// TODO: improve generic type passed here
/** @type {import('@unocss/core').Preset<object>} */
export function presetWarp (options = {}) {
  checkEnvironment();
  const externalizeClasses = options.externalizeClasses ?? !options.development; // 'true' by default
  const safeExternalClasses = options.externalClasses || [];
  const excludedClasses = options.omitComponentClasses ? [...classes, ...safeExternalClasses] : safeExternalClasses;
  const theme = useTheme(options);
  return {
    name: '@warp-ds/uno',
    theme,
    rules,
    variants,
    preflights: options.development ? [] : preflights,
    postprocess: postprocess(externalizeClasses, excludedClasses),
    shortcuts,
  };
}

function checkEnvironment() {
  if (typeof fetch === 'undefined') {
    if (typeof process !== 'undefined') {
      const NODE_MAJOR_VERSION = process.versions.node.split('.')[0];
      if (NODE_MAJOR_VERSION < 18) throw new Error('Warp requires node 18 or higher');
    }
    throw new Error("'fetch' is undefined for some reason and presetWarp requires it");
  }
}

export default presetWarp;
