import { createGenerator } from '@unocss/core'
import { presetWarp } from '#plugin'

const uno = createGenerator({ presets: [presetWarp()] })
const devClasses = ['m-16!', 'opacity-50']
const cliClasses = process.argv.slice(2)
const classes = cliClasses.length ? cliClasses : devClasses
const result = await uno.generate(classes)
console.log(result.css)
