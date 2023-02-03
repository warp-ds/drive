import { expect, test } from 'vitest'
import { setup } from './_helpers.js'

setup()

test('padding works', async ({ uno }) => {
  const classes = ['p-8', 'px-2', 'py-4', 'pl-32', 'pr-16', 'pb-8', 'pt-16']
  const { css } = await uno.generate(classes)
  expect(css).toMatchInlineSnapshot(`
    "/* layer: default */
    .p-8{padding:0.8rem;}
    .px-2{padding-left:0.2rem;padding-right:0.2rem;}
    .py-4{padding-top:0.4rem;padding-bottom:0.4rem;}
    .pb-8{padding-bottom:0.8rem;}
    .pl-32{padding-left:3.2rem;}
    .pr-16{padding-right:1.6rem;}
    .pt-16{padding-top:1.6rem;}"
  `)
})

test('padding skips bad values', async ({ uno }) => {
  const classes = ['p-7', 'px-3', 'py-5', 'pl-33', 'pr-19', 'pb-9', 'pt-17']
  const { css } = await uno.generate(classes)
  expect(css).toMatchInlineSnapshot('""')
})

test('margin works', async ({ uno }) => {
  const classes = ['m-8', 'mx-2', 'my-4', 'ml-32', 'mr-16', 'mb-8', 'mt-16', '-m-8', 'm-auto', 'ml-auto']
  const { css } = await uno.generate(classes)
  expect(css).toMatchInlineSnapshot(`
    "/* layer: default */
    .-m-8{margin:-0.8rem;}
    .m-8{margin:0.8rem;}
    .m-auto{margin:auto;}
    .mx-2{margin-left:0.2rem;margin-right:0.2rem;}
    .my-4{margin-top:0.4rem;margin-bottom:0.4rem;}
    .mb-8{margin-bottom:0.8rem;}
    .ml-32{margin-left:3.2rem;}
    .ml-auto{margin-left:auto;}
    .mr-16{margin-right:1.6rem;}
    .mt-16{margin-top:1.6rem;}"
  `)
})

test('margin skips bad values', async ({ uno }) => {
  const classes = ['m-7', 'mx-3', 'my-5', 'ml-33', 'mr-19', 'mb-9', 'mt-17', '-m-11']
  const { css } = await uno.generate(classes)
  expect(css).toMatchInlineSnapshot('""')
})
