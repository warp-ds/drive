import { getTestSuite } from './_helpers.js'
import * as assert from 'uvu/assert'
import { rules, display } from '#rules'

const test = getTestSuite('general')


test('all static rules generate', async (t) => {
  const staticClasses = rules.filter(r => typeof r[0] === 'string').map(r => r[0])
  const generated = await t.uno.generate(staticClasses)
  // generated.matched is a Set
  assert.is(generated.matched.size, staticClasses.length)
  assert.is(staticClasses.length, 33)
})

test('display rules are sane', async (t) => {
  // filter 'hidden' because it doesn't map 1:1 with the CSS it generates
  const displayClasses = display.filter(r => typeof r[0] === 'string').map(r => r[0]).filter(r => r !== 'hidden')
  const buildDisplayRule = c => `display:${c};`
  const displayExpectations = displayClasses.map(buildDisplayRule)
  displayClasses.push('hidden', 'display-unset', 'display-revert', 'display-inherit')
  displayExpectations.push(buildDisplayRule('none'), buildDisplayRule('unset'), buildDisplayRule('revert'), buildDisplayRule('inherit'))
  const { css } = await t.uno.generate(displayClasses)
  for (const expected of displayExpectations) assert.match(css, expected, `Could not find ${expected}`)
})

test.run()
