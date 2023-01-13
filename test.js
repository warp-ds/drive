import { suite } from 'uvu'
import * as assert from 'uvu/assert'
import { createGenerator } from '@unocss/core'
import presetEngine from './src/index.js'
import { rules, display } from './src/rules.js'

const test = suite('rules')

test.before.each(t => t.uno = createGenerator({ presets: [presetEngine()] }))

test('all static rules generate', async (t) => {
  const staticClasses = rules.filter(r => typeof r[0] === 'string').map(r => r[0])
  const generated = await t.uno.generate(staticClasses)
  // generated.matched is a Set
  assert.is(generated.matched.size, staticClasses.length)
})

test('display rules are sane', async (t) => {
  // filter 'hidden' because it doesn't map 1:1 with the CSS it generates
  const displayClasses = display.filter(r => typeof r[0] === 'string').map(r => r[0]).filter(r => r !== 'hidden')
  const buildDisplayRule = c => `display:${c};`
  const displayExpectations = displayClasses.map(buildDisplayRule)
  displayClasses.push('display-unset', 'display-revert', 'display-inherit')
  displayExpectations.push(buildDisplayRule('unset'), buildDisplayRule('revert'), buildDisplayRule('inherit'))
  const generated = await t.uno.generate(displayClasses)
  for (const expected of displayExpectations) {
    assert.ok(generated.css.includes(expected), `Could not find ${expected}`)
  }
})

test.run()
