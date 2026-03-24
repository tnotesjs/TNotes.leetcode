/**
 * @param {string} s
 * @return {number}
 */
var findSubstringInWraproundString = function (s) {
  const maxLen = new Array(26).fill(0)
  let len = 1
  for (let i = 0; i < s.length; i++) {
    if (i > 0 && (s.charCodeAt(i) - s.charCodeAt(i - 1) + 26) % 26 === 1) {
      len++
    } else {
      len = 1
    }
    const idx = s.charCodeAt(i) - 97
    maxLen[idx] = Math.max(maxLen[idx], len)
  }
  return maxLen.reduce((a, b) => a + b, 0)
}
