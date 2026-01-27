/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  // 统计每个数的出现次数
  const freq = new Map()
  for (const num of arr) {
    freq.set(num, (freq.get(num) || 0) + 1)
  }

  // 检查出现次数是否都唯一
  const seen = new Set()
  for (const count of freq.values()) {
    if (seen.has(count)) return false
    seen.add(count)
  }

  return true
}
