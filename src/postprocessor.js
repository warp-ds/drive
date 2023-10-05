import { escapeSelector } from '@unocss/core';
import { classesToPurge } from './classesToPurge.js';

const prefix = 'w-';
const classify = (str) => `.${escapeSelector(str)}`;

export const postprocess = async (
  shouldExternalize,
  _externalClasses = [],
  omitComponentClasses
) => {
  const externalClasses = (
    omitComponentClasses
      ? _externalClasses
      : _externalClasses.concat(await classesToPurge.classes)
  ).map(classify);

  return (obj) => {
    if (shouldExternalize && externalClasses.includes(obj.selector)) {
      return (obj.entries = []);
    }
    obj.entries.forEach((e) => {
      e[0] = e[0].replace(/^--un-/, `--${prefix}`);
      if (typeof e[1] === 'string') {
        e[1] = e[1].replace(/var\(--un-/g, `var(--${prefix}`);
      }
    });
  };
};
