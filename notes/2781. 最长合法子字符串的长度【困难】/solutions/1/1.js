/**
 * @param {string} word
 * @param {string[]} forbidden
 * @return {number}
 */
var longestValidSubstring = function (word, forbidden) {
  const set = new Set(forbidden)
  const n = word.length
  let res = 0,
    right = n // 右边界（开区间）
  for (let left = n - 1; left >= 0; left--) {
    // forbidden 字符串最长 10
    for (let k = left; k < Math.min(left + 10, right); k++) {
      if (set.has(word.slice(left, k + 1))) {
        right = k
        break
      }
    }
    res = Math.max(res, right - left)
  }
  return res
}
