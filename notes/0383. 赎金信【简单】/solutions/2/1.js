/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const map = new Map()

  // 统计杂志字符频次
  for (const char of magazine) {
    map.set(char, (map.get(char) || 0) + 1)
  }

  // 检查赎金信字符需求
  for (const char of ransomNote) {
    if (!map.has(char) || map.get(char) === 0) {
      return false
    }
    map.set(char, map.get(char) - 1)
  }

  return true
}
