import { setup } from './_helpers.js'
import { expect, assert, test } from 'vitest'

setup()

test('grid columns', async (t) => {
  const staticNumbers = ['grid-cols-2', 'grid-cols-5']
  const arbitrary = ['grid-cols-[200px_minmax(900px,_1fr)_100px]', 'grid-cols-[320px_1fr]']
  const { css } = await t.uno.generate([staticNumbers, arbitrary].flat(Infinity))
  const staticResult = n => `grid-template-columns:repeat(${n},minmax(0,1fr));`
  assert.include(css, staticResult(2))
  assert.include(css, staticResult(5))
  assert.include(css, 'grid-template-columns:200px minmax(900px, 1fr) 100px;')
  assert.include(css, 'grid-template-columns:320px 1fr;')
})

test('grid auto flows', async (t) => {
  const gridFlows = [
    'auto-rows-auto',
    'auto-rows-min',
    'auto-rows-max',
    'auto-rows-fr',
    'grid-flow-row', 
    'grid-flow-col', 
    'grid-flow-dense', 
    'grid-flow-row-dense', 
    'grid-flow-col-dense'
  ];
  const {css} = await t.uno.generate(gridFlows);

  expect(css).toMatchInlineSnapshot(`
    "/* layer: default */
    .auto-rows-auto{grid-auto-rows:auto;}
    .auto-rows-fr{grid-auto-rows:minmax(0,1fr);}
    .auto-rows-max{grid-auto-rows:max-content;}
    .auto-rows-min{grid-auto-rows:min-content;}
    .grid-flow-row{grid-auto-flow:row;}
    .grid-flow-col{grid-auto-flow:column;}
    .grid-flow-dense{grid-auto-flow:dense;}
    .grid-flow-row-dense{grid-auto-flow:row dense;}
    .grid-flow-col-dense{grid-auto-flow:column dense;}"
  `)
})