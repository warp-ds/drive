import { setup } from './_helpers.js'
import { spaceBase } from '#theme'
import { expect, test } from 'vitest'

setup()

test('space-x', async ({ uno }) => {
  const classes = spaceBase.map(e => `space-x-${e}`)
  classes.push('space-x', 'space-x-reverse')
  const { css } = await uno.generate(classes)
  expect(css).toMatchSnapshot()
})

test('space-y', async ({ uno }) => {
  const classes = spaceBase.map(e => `space-y-${e}`)
  classes.push('space-y', 'space-y-reverse')
  const { css } = await uno.generate(classes)
  expect(css).toMatchSnapshot()
})
