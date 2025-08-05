/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function (words) {
  // 将字符串转换为标准化形式
  const normalize = (word) => {
    return [...new Set(word)].sort().join('')
  }

  // 统计每种标准化形式的出现次数
  const countMap = new Map()
  for (let word of words) {
    const normalized = normalize(word)
    countMap.set(normalized, (countMap.get(normalized) || 0) + 1)
  }

  // 计算组合数：C(n,2) = n*(n-1)/2
  let result = 0
  for (let count of countMap.values()) {
    if (count > 1) {
      result += (count * (count - 1)) / 2
    }
  }

  return result
}
