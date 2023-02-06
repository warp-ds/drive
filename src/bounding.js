import { warnOnce } from '@unocss/core'

const inBounds = (v, bounds) => {
  if (Number.isNaN(Number(v))) return true
  return v >= bounds[0] && v <= bounds[1]
}
const notAvailable = (className, value) => `${className} is not available - this error message needs improvement`

// we currently can't pass handler's as first-class functions because of something goofy in Uno
// e.g. we have to do { handler: (d) => h.number(d) } instead of just { handler: h.number }
// TODO: fix or workaround, or if it's March and this message is still here just delete this TODO :D
export const bounded = (cb, bounds, options = {}) => ([_, d]) => {
  const val = options.handler?.(d)
  if (options.nullable && !d) return cb([_, d])
  if (!inBounds(val, bounds)) return warnOnce(notAvailable(_, d))
  return cb([_, d])
}
