/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function (s) {
  let res = 0
  for (let c = 0; c < 26; c++) {
    const ch = String.fromCharCode(97 + c)
    const first = s.indexOf(ch)
    const last = s.lastIndexOf(ch)
    if (first < last) {
      const between = new Set()
      for (let i = first + 1; i < last; i++) between.add(s[i])
      res += between.size
    }
  }
  return res
}
