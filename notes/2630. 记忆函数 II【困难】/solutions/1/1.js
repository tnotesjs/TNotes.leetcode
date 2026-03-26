/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const idxMap = new Map()
  const cache = new Map()

  const getIdx = (obj) => {
    if (!idxMap.has(obj)) {
      idxMap.set(obj, idxMap.size)
    }
    return idxMap.get(obj)
  }

  return function (...params) {
    const key = params.map(getIdx).join(',')
    if (!cache.has(key)) {
      cache.set(key, fn(...params))
    }
    return cache.get(key)
  }
}
