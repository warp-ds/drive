import { handler as h } from '#utils'

export const internalRules = [
  [/^i-bg-(.+)$/, ([, cssvar]) => ({ backgroundColor: h.warpToken(cssvar) })],
  [/^i-text-(.+)$/, ([, cssvar]) => ({ color: h.warpToken(cssvar) })],
  [/^i-border-(.+)$/, ([, cssvar]) => ({ borderColor: h.warpToken(cssvar) })],
]
