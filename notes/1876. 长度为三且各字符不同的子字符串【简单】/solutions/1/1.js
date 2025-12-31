/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s) {
  let ans = 0
  for (let i = 0; i + 2 < s.length; i += 1) {
    const a = s[i]
    const b = s[i + 1]
    const c = s[i + 2]
    if (a !== b && a !== c && b !== c) ans += 1
  }
  return ans
}
