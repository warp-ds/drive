import { createGenerator } from '@unocss/core'
import presetEngine from './src/index.js'
import { buildList } from '@warp-ds/fabric-parity-checker'

const fabricClassListWithoutClassDots = buildList().map(e => e.replace('.', ''))
console.log(fabricClassListWithoutClassDots)

const uno = createGenerator({ presets: [presetEngine()] })
const fabricClasses = await uno.generate(fabricClassListWithoutClassDots)

fabricClassListWithoutClassDots.forEach(className => {
  if (!fabricClasses.matched.has(className)) console.log("MISSING", className)
})
