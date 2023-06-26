import { preflights } from '#preflights';
import { rules } from '#rules';
import { shortcuts } from '#shortcuts';
import { variants } from '#variants';
import { useTheme } from '#theme';
import { postprocess } from '#postprocess';

/**
 * @typedef PluginOptions
 * @type {Object}
 * @property {boolean} skipPreflight // internal use only - force preflights to be excluded
 * @property {boolean} externalizeClasses - force external or 'core' classes to be included/excluded
 * @property {boolean} usePixels - use pixel spacing instead of rem
 */

// TODO: improve generic type passed here
/** @type {import('@unocss/core').Preset<object>} */
export function presetWarp (options = {}) {
  checkEnvironment();
  const externalizeClasses = options.externalizeClasses;
  const externalClasses = options.externalClasses ?? []; // will possibly be our own list in the future
  const theme = useTheme(options);
  return {
    name: '@warp-ds/uno',
    theme,
    rules,
    variants,
    preflights: options.skipPreflight ? [] : preflights,
    postprocess: postprocess(externalizeClasses, externalClasses),
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
