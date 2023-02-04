import { defineConfig } from 'rollup'
import { nodeResolve } from '@rollup/plugin-node-resolve'

export default defineConfig({
  input: './src/plugin.js',
  output: {
    file: './dist/engine.js',
    format: 'esm'
  },
  plugins: [nodeResolve()]
})
