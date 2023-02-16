import { setup } from './_helpers.js'
import { expect, test } from 'vitest'

setup()

test('it generates css based on warp tokens', async ({ uno }) => {
  const classes = ['i-bg-$foo-bar', 'i-text-$biz-baz', 'i-border-$wombat-llama']
  const anticlasses = ['i-bg-foos-bars', 'i-text-bizs-bazs', 'i-border-wombats-llamas', 'i-magnuseses']
  const { css } = await uno.generate([...classes, ...anticlasses])
  expect(css).toMatchSnapshot()
})
