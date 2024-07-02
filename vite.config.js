import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vitest/config';

import { presetWarp } from '#plugin';

export default defineConfig({
  plugins: [UnoCSS({ presets: [presetWarp({ development: true })] })],
  test: {
    include: ['./test/*.js'],
    exclude: ['./test/_*'],
  },
});
