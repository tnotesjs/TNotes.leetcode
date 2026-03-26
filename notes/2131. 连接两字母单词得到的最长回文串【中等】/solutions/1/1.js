/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function (words) {
  const count = new Map()
  for (const w of words) {
    count.set(w, (count.get(w) || 0) + 1)
  }
  let res = 0
  let hasCenter = false
  for (const [w, c] of count) {
    const rev = w[1] + w[0]
    if (w === rev) {
      // 回文对，如 "aa"
      res += Math.floor(c / 2) * 4
      if (c % 2 === 1) hasCenter = true
    } else if (w < rev && count.has(rev)) {
      res += Math.min(c, count.get(rev)) * 4
    }
  }
  if (hasCenter) res += 2
  return res
}
