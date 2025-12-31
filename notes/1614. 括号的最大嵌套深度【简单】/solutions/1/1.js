/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
  let cur = 0
  let ans = 0

  for (const ch of s) {
    if (ch === '(') {
      cur++
      if (cur > ans) ans = cur
    } else if (ch === ')') {
      cur--
    }
  }

  return ans
}
