/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var minDeletion = function (s, k) {
  // 统计每个字符的频率
  const freq = new Map()
  for (const c of s) {
    freq.set(c, (freq.get(c) || 0) + 1)
  }

  // 如果不同字符数已经 <= k，无需删除
  if (freq.size <= k) return 0

  // 将频率排序（升序），贪心地删除频率最小的字符
  const counts = [...freq.values()].sort((a, b) => a - b)

  // 需要删除的字符种类数
  const toRemove = freq.size - k
  let result = 0

  // 删除频率最小的 toRemove 个字符
  for (let i = 0; i < toRemove; i++) {
    result += counts[i]
  }

  return result
}
