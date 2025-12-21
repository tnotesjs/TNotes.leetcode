/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function (s) {
  // 统计每个字符的频率
  const freq = new Map()
  for (const c of s) {
    freq.set(c, (freq.get(c) || 0) + 1)
  }

  let maxOdd = 0 // 出现奇数次的最大频率
  let minEven = Infinity // 出现偶数次的最小频率

  for (const count of freq.values()) {
    if (count % 2 === 1) {
      maxOdd = Math.max(maxOdd, count)
    } else {
      minEven = Math.min(minEven, count)
    }
  }

  return maxOdd - minEven
}
