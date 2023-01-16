import { getTestSuite } from './_helpers.js'
import * as assert from 'uvu/assert'

const test = getTestSuite('grid')

test('grid columns', async (t) => {
  const staticNumbers = ['grid-cols-2', 'grid-cols-5']
  const arbitrary = ['grid-cols-[200px_minmax(900px,_1fr)_100px]', 'grid-cols-[320px_1fr]']
  const { css } = await t.uno.generate([staticNumbers, arbitrary].flat(Infinity))
  const staticResult = n => `grid-template-columns:repeat(${n},minmax(0,1fr));`
  assert.match(css, staticResult(2))
  assert.match(css, staticResult(5))
  assert.match(css, 'grid-template-columns:200px minmax(900px, 1fr) 100px;')
  assert.match(css, 'grid-template-columns:320px 1fr;')
})

test.run()
