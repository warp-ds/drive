import { setup } from './_helpers.js'
import { expect, test } from 'vitest'
import * as staticRules from '../src/_rules/static.js'

setup()

test('static rules do static things', async ({ uno }) => {
  const staticClasses = Object.values(staticRules).flat().filter(rule => typeof rule[0] === 'string').map(rule => rule[0])
  const { css } = await uno.generate(staticClasses)
  expect(css).toMatchSnapshot()
})
