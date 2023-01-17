import { createGenerator } from '@unocss/core'
import presetEngine from './src/index.js'

const uno = createGenerator({ presets: [presetEngine()] })
const result = await uno.generate(['pa-16', '-m-2', 'pa-18'])
console.log(result.css)
