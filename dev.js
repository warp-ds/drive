import { createGenerator } from '@unocss/core'
import presetEngine from './src/index.js'

// const staticProperties = rules.filter(r => typeof r[0] === 'string').map(r => r[0])
// const u = createGenerator({ presets: [presetEngine()] })
// const generated = await u.generate(staticProperties)
// console.log(generated.matched.size === staticProperties.length)

const uno = createGenerator({
  presets: [presetEngine()]
})

const result = await uno.generate(['col-span-2', 'col-span-'])
console.log(result.css)
