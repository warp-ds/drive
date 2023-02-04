import { setup } from './_helpers.js'
import { assert, test } from 'vitest'

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
