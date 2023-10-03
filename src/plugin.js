import { preflights } from "#preflights";
import { rules } from "#rules";
import { shortcuts } from "#shortcuts";
import { variants } from "#variants";
import { useTheme } from "#theme";
import { postprocess } from "#postprocess";
/**
 * @typedef PluginOptions
 * @type {Object}
 * @property {boolean} development // internal use only - force preflights(transform + resets) to be excluded and no external classes will be processed
 * @property {boolean} skipResets // force resets to be excluded from preflights
 * @property {boolean} externalizeClasses - if true forces external or 'core' classes to be excluded from the process.
 * @property {Array} externalClasses - list of classes that will not be processed
 * @property {boolean} usePixels - use pixel spacing instead of rem
 */

/**
 * @param {PluginOptions} options
 * @type {import('@unocss/core').Preset}
 */
export function presetWarp(options = {}) {
  checkEnvironment();
  const externalizeClasses = options.externalizeClasses ?? !options.development; // 'true' by default
  const externalClasses = options.externalClasses || [];
  const theme = useTheme(options);
  return {
    name: "@warp-ds/uno",
    theme,
    rules,
    variants,
    preflights: options.development ? [] : preflights(options.skipResets),
    postprocess: postprocess(externalizeClasses, externalClasses),
    shortcuts,
  };
}

function checkEnvironment() {
  if (typeof fetch === "undefined") {
    if (typeof process !== "undefined") {
      const NODE_MAJOR_VERSION = process.versions.node.split(".")[0];
      if (NODE_MAJOR_VERSION < 18) {
        throw new Error("Warp requires node 18 or higher");
      }
    }
    throw new Error(
      "'fetch' is undefined for some reason and presetWarp requires it"
    );
  }
}

export default presetWarp;
