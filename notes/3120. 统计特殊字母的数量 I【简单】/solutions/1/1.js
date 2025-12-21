/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function (word) {
  const lower = new Set()
  const upper = new Set()

  for (const c of word) {
    if (c >= 'a' && c <= 'z') {
      lower.add(c)
    } else {
      upper.add(c.toLowerCase())
    }
  }

  // 统计同时存在大小写形式的字母数量
  let count = 0
  for (const c of lower) {
    if (upper.has(c)) {
      count++
    }
  }

  return count
}
