import { createGenerator } from '@unocss/core'
import presetEngine from './src/index.js'

const uno = createGenerator({ presets: [presetEngine()] })
const result = await uno.generate(['row-span-2', 'row-span-10000', 'gap-32', '!sm:pa-16', '-m-2', 'pa-18', '!ma-16', 'opacity-50', 'align-top', 'line-clamp-2'])
console.log(result.css)
