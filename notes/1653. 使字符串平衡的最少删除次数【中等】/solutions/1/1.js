/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function (s) {
  let bCount = 0,
    res = 0
  for (const c of s) {
    if (c === 'b') {
      bCount++
    } else {
      // 遇到 'a'，要么删这个 a，要么删前面一个 b
      res = Math.min(res + 1, bCount)
    }
  }
  return res
}
