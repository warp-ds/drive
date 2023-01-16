import { suite } from 'uvu'
import { createGenerator } from '@unocss/core'
import presetEngine from '#plugin'

export const getTestSuite = name => {
  const test = suite(name)
  test.before.each(t => t.uno = createGenerator({ presets: [presetEngine()] }))
  return test
}
