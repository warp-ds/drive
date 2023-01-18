import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import { presetEngine } from '@warp-ds/uno'

export default defineConfig({
  plugins: [
    UnoCSS({ presets: [presetEngine({ mode: 'hyper' })] })
  ]
})
