import { setup } from './_helpers.js'
import { spaceBase } from '#theme'
import { expect, test } from 'vitest'

setup()

test('gap allows to render css based of all units in spaceBase', async (t) => {
  const classes = spaceBase.map((spacingUnit) => {
    return `gap-${spacingUnit}`
  })

  const { css } = await t.uno.generate(classes)

  expect(css).toMatchInlineSnapshot(`
    "/* layer: default */
    .gap-0{gap:0rem;}
    .gap-1{gap:0.1rem;}
    .gap-10{gap:1rem;}
    .gap-112{gap:11.2rem;}
    .gap-12{gap:1.2rem;}
    .gap-128{gap:12.8rem;}
    .gap-14{gap:1.4rem;}
    .gap-144{gap:14.4rem;}
    .gap-16{gap:1.6rem;}
    .gap-2{gap:0.2rem;}
    .gap-20{gap:2rem;}
    .gap-24{gap:2.4rem;}
    .gap-28{gap:2.8rem;}
    .gap-32{gap:3.2rem;}
    .gap-4{gap:0.4rem;}
    .gap-40{gap:4rem;}
    .gap-44{gap:4.4rem;}
    .gap-48{gap:4.8rem;}
    .gap-56{gap:5.6rem;}
    .gap-6{gap:0.6rem;}
    .gap-64{gap:6.4rem;}
    .gap-8{gap:0.8rem;}
    .gap-80{gap:8rem;}
    .gap-96{gap:9.6rem;}"
  `)
})

test("gap does not render css for invalid spacing units", async (t) => {
  const { css } = await t.uno.generate(["gap-9999"])

  expect(css).toMatchInlineSnapshot('""')
})
