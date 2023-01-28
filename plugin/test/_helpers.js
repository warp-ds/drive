import { createGenerator } from '@unocss/core'
import { beforeEach } from 'vitest'
import presetEngine from '#plugin'

export const setup = () => {
  beforeEach(t => {
    t.uno = createGenerator({ presets: [presetEngine()] })
  })
}
