import { nodeResolve } from '@rollup/plugin-node-resolve';
import { defineConfig } from 'rollup';

export default defineConfig({
  input: './src/plugin.js',
  output: {
    file: './dist/drive.js',
    format: 'esm',
  },
  plugins: [nodeResolve()],
});
