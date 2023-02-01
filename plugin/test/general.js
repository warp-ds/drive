import { rules, display } from '#rules'
import { assert, expect, test } from 'vitest'
import { setup, getGenerator } from './_helpers.js'
import { createAutocomplete } from '@unocss/autocomplete'

setup()

test('all static rules generate', async ({ uno }) => {
  const staticClasses = rules.filter(r => typeof r[0] === 'string').map(r => r[0])
  const generated = await uno.generate(staticClasses)
  // generated.matched is a Set
  assert.equal(generated.matched.size, staticClasses.length)
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

test(`autocomplete doesn't throw`, async ({ uno }) => {
  assert.doesNotThrow(() => {
    const ac = createAutocomplete(uno)
    ac.enumerate()
  })
})

test('can generate pixel values for theme', async () => {
  const uno = getGenerator({ usePixels: true })
  const { css } = await uno.generate(['pt-8', 'bottom-4', '-ml-32'])
  expect(css).toMatchInlineSnapshot(`
    "/* layer: default */
    .pt-8{padding-top:8px;}
    .-ml-32{margin-left:-32px;}
    .bottom-4{bottom:4px;}"
  `)
})
