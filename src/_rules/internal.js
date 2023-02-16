import { handler as h } from '#utils'

export const internalRules = [
  [/^i-bg-(.+)$/, ([, cssvar]) => ({ backgroundColor: h.warptoken(cssvar) })],
  [/^i-text-(.+)$/, ([, cssvar]) => ({ color: h.warptoken(cssvar) })],
  [/^i-border-(.+)$/, ([, cssvar]) => ({ borderColor: h.warptoken(cssvar) })],
]
