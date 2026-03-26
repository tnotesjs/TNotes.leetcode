/**
 * @param {string} s
 * @param {string} chars
 * @param {number[]} vals
 * @return {number}
 */
var maximumCostSubstring = function (s, chars, vals) {
  const val = new Array(26)
  for (let i = 0; i < 26; i++) val[i] = i + 1
  for (let i = 0; i < chars.length; i++) {
    val[chars.charCodeAt(i) - 97] = vals[i]
  }
  let ans = 0,
    cur = 0
  for (const ch of s) {
    cur = Math.max(cur + val[ch.charCodeAt(0) - 97], 0)
    ans = Math.max(ans, cur)
  }
  return ans
}
