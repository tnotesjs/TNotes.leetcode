/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function(s, k) {
  const res = s.split('')
  for (let i = 0; i < res.length; i++) {
    const code = res[i].charCodeAt(0) - 97
    // 将当前字符变成 'a' 的最小距离
    const dist = Math.min(code, 26 - code)
    if (dist <= k) {
      res[i] = 'a'
      k -= dist
    } else {
      // 尽量减小字符
      const newCode = code - k
      res[i] = String.fromCharCode(97 + newCode)
      k = 0
    }
  }
  return res.join('')
}
