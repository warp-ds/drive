import { createGenerator } from '@unocss/core';
import { beforeEach } from 'vitest';
import { presetWarp } from '#plugin';

export const getGenerator = (opts = {}) => createGenerator({ presets: [presetWarp({ ...opts, test: true })] });
export const setup = (opts = {}) => {
  beforeEach(t => {
    t.uno = getGenerator({ ...opts, test: true });
  });
};

export const getFractions = (prefix, length = 6) => {
  const numerator = Array.from({ length }).map((_, i) => i + 1);
  const denomenator = Array.from({ length }).map((_, i) => i + 1);
  return numerator.flatMap(n => denomenator.map(d => {
    if (n > d) return;
    return `${prefix}-${n}/${d}`;
  })).filter(Boolean);
};
