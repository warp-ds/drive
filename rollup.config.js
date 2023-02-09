import { defineConfig } from 'rollup'
import { nodeResolve } from '@rollup/plugin-node-resolve'

export default defineConfig({
  input: './src/plugin.js',
  output: {
    file: './dist/drive.js',
    format: 'esm'
  },
  plugins: [nodeResolve()]
})
