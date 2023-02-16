import { defineConfig } from 'vitest/config';
import drnm from 'drnm';
import path from 'node:path';
import fs from 'node:fs';
import UnoCSS from 'unocss/vite';
import { presetWarp } from '#plugin';

const __workdir = drnm(import.meta.url);
const pkg = JSON.parse(fs.readFileSync(path.join(__workdir, './package.json')));
const alias = Object.entries(pkg.imports).reduce((acc, [k, v]) => {
  acc[k] = path.resolve(path.join(__workdir, '.', v));
  return acc;
}, {});

export default defineConfig({
  plugins: [
    UnoCSS({ presets: [presetWarp({ usePreflight: true })] }),
  ],
  test: {
    include: ['./test/*.js'],
    exclude: ['./test/_*'],
  },
  resolve: { alias },
});
