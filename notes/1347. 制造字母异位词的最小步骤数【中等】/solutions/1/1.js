/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
  const count = new Array(26).fill(0)
  for (const ch of s) count[ch.charCodeAt(0) - 97]++
  for (const ch of t) count[ch.charCodeAt(0) - 97]--
  let ans = 0
  for (const c of count) if (c > 0) ans += c
  return ans
}
