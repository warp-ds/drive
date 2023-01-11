import { createGenerator } from '@unocss/core'
import presetEngine from './src/index.js'

const uno = createGenerator({
  presets: [presetEngine()]
})

const result = await uno.generate(['flex', 'flex-1/2'])
console.log(result.css)
