import { defineConfig } from 'vitest/config';
import UnoCSS from 'unocss/vite';
import { presetWarp } from '#plugin';

export default defineConfig({
  plugins: [
    UnoCSS({ presets: [presetWarp({ development: true })] }),
  ],
  test: {
    include: ['./test/*.js'],
    exclude: ['./test/_*'],
  },
});
