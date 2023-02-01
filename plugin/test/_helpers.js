import { createGenerator } from '@unocss/core'
import { beforeEach } from 'vitest'
import { presetWarp } from '#plugin'

export const setup = () => {
  beforeEach(t => {
    t.uno = createGenerator({ presets: [presetWarp()] })
  })
}
