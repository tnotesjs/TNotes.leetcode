/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {}

// 自定义排序，优先比较比特位 1 的个数，再比较数值
var sortByBits = function (arr) {
  const cache = new Map()

  function popcount(x) {
    if (cache.has(x)) return cache.get(x)
    let c = 0
    let v = x
    while (v) {
      v &= v - 1
      c++
    }
    cache.set(x, c)
    return c
  }

  return arr.sort((a, b) => {
    const ca = popcount(a)
    const cb = popcount(b)
    if (ca !== cb) return ca - cb
    return a - b
  })
}
