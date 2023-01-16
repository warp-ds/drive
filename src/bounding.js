import { handler as h } from '#utils'
import { warnOnce } from '@unocss/core'

const inBounds = (v, bounds) => v >= bounds[0] && v <= bounds[1]
const notAvailable = (className, value) => `${className} is not available - this error message needs improvement`
export const bounded = (cb, bounds, options = {}) => ([_, d]) => {
  const val = h.bracket(d)
  if (options.nullable && !d) return cb([_, d])
  if (!inBounds(val, bounds)) return warnOnce(notAvailable(_, d))
  return cb([_, d])
}

