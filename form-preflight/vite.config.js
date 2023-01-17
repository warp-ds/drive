import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import { presetEngine } from '@nmp-ds/engine'

export default defineConfig({
  plugins: [
    UnoCSS({ presets: [presetEngine({ mode: 'hyper' })] })
  ]
})
