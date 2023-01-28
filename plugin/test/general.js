import { rules, display } from '#rules'
import { assert, test } from 'vitest'
import { setup } from './_helpers.js'

setup()


test('all static rules generate', async ({ uno }) => {
  const staticClasses = rules.filter(r => typeof r[0] === 'string').map(r => r[0])
  const generated = await uno.generate(staticClasses)
  // generated.matched is a Set
  assert.equal(generated.matched.size, staticClasses.length)
  assert.equal(staticClasses.length, 95)
})

test('display rules are sane', async ({ uno }) => {
  // filter 'hidden' because it doesn't map 1:1 with the CSS it generates
  const displayClasses = display.filter(r => typeof r[0] === 'string').map(r => r[0]).filter(r => r !== 'hidden')
  const buildDisplayRule = c => `display:${c};`
  const displayExpectations = displayClasses.map(buildDisplayRule)
  displayClasses.push('hidden', 'display-unset', 'display-revert', 'display-inherit')
  displayExpectations.push(buildDisplayRule('none'), buildDisplayRule('unset'), buildDisplayRule('revert'), buildDisplayRule('inherit'))
  const { css } = await uno.generate(displayClasses)
  for (const expected of displayExpectations) assert.include(css, expected)
})
