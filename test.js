import { createGenerator } from '@unocss/core'
import presetEngine from './src/index.js'

const uno = createGenerator({
  presets: [presetEngine()]
})

const result = await uno.generate(['flex', 'flex-2', 'flex-[3]', 'flex-[1 2 auto]', 'flex-[min-content]', 'display-unset'])
console.log(result.css)
