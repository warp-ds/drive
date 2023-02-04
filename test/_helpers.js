import { createGenerator } from '@unocss/core'
import { beforeEach } from 'vitest'
import { presetWarp } from '#plugin'

export const getGenerator = (opts = {}) => createGenerator({ presets: [presetWarp(opts)] })
export const setup = (opts = {}) => {
  beforeEach(t => {
    t.uno = getGenerator(opts)
  })
}
