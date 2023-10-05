import { createGenerator } from '@unocss/core';
import { beforeEach } from 'vitest';
import { presetWarp } from '#plugin';

export const getGenerator = async (opts = {}) => {
  const asyncPreset = await presetWarp({
    ...opts,
    omitComponentClasses: true,
    development: true,
  });
  return createGenerator({ presets: [asyncPreset] });
};
export const setup = (opts = {}) => {
  beforeEach(async (t) => {
    t.uno = await getGenerator({
      ...opts,
      omitComponentClasses: true,
      development: true,
    });
  });
};

export const getFractions = (prefix, length = 6) => {
  const numerator = Array.from({ length }).map((_, i) => i + 1);
  const denomenator = Array.from({ length }).map((_, i) => i + 1);
  return numerator
    .flatMap((n) =>
      denomenator.map((d) => {
        if (n > d) return;
        return `${prefix}-${n}/${d}`;
      })
    )
    .filter(Boolean);
};
