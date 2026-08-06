/**
 * @param {Object|Array} obj
 * @param {Function} fn
 * @return {Object|Array|undefined}
 */
var deepFilter = function (obj, fn) {
  if (Array.isArray(obj)) {
    const res = obj.map(item => deepFilter(item, fn)).filter(item => item !== undefined)
    return res.length > 0 ? res : undefined
  }
  if (typeof obj === 'object' && obj !== null) {
    const res = {}
    for (const key of Object.keys(obj)) {
      const val = deepFilter(obj[key], fn)
      if (val !== undefined) res[key] = val
    }
    return Object.keys(res).length > 0 ? res : undefined
  }
  return fn(obj) ? obj : undefined
}
