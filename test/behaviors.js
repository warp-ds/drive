import { setup } from './_helpers.js'
import { expect, test } from 'vitest'

setup()

test('appearance', async ({ uno }) => {
  const { css } = await uno.generate('appearance-none')
  expect(css).toMatchInlineSnapshot(`
    "/* layer: default */
    .appearance-none{appearance:none;-webkit-appearance:none;}"
  `)
})

test('will-change', async ({ uno }) => {
  const { css } = await uno.generate(['will-change-height', 'will-change-color'])
  expect(css).toMatchInlineSnapshot(`
    "/* layer: default */
    .will-change-color{will-change:color;}
    .will-change-height{will-change:height;}"
  `)
})

test('will-change', async ({ uno }) => {
  const { css } = await uno.generate(['list-disc', 'list-circle', 'list-outside', 'list-inside', 'list-none'])
  expect(css).toMatchSnapshot()
})

test('overscroll', async ({ uno }) => {
  const classes = ['overscroll-auto', 'overscroll-contain', 'overscroll-none', 'overscroll-y-auto', 'overscroll-y-contain', 'overscroll-y-none', 'overscroll-x-auto', 'overscroll-x-contain', 'overscroll-x-none']
  const { css } = await uno.generate(classes)
  expect(css).toMatchSnapshot()
})

test('scroll', async ({ uno }) => {
  const { css } = await uno.generate(['scroll-auto', 'scroll-smooth'])
  expect(css).toMatchInlineSnapshot(`
    "/* layer: default */
    .scroll-auto{scroll-behavior:auto;}
    .scroll-smooth{scroll-behavior:smooth;}"
  `)
})
