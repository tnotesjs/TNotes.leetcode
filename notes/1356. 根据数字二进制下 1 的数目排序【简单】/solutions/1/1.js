/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  // 缓存每个数字的二进制1的个数，避免重复计算
  const cache = new Map()

  function popcount(x) {
    // 如果已缓存，直接返回
    if (cache.has(x)) return cache.get(x)
    let c = 0
    let v = x
    // 计算二进制表示中1的个数（Brian Kernighan算法）
    while (v) {
      v &= v - 1
      c++
    }
    cache.set(x, c)
    return c
  }

  // 按照二进制1的个数排序，若相同则按数值大小排序
  return arr.sort((a, b) => {
    const ca = popcount(a) // a的二进制1的个数
    const cb = popcount(b) // b的二进制1的个数
    if (ca !== cb) return ca - cb // 1的个数不同，按个数升序
    return a - b // 1的个数相同，按数值升序
  })
}
