/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  // 如果长度不同，肯定不是同构字符串
  if (s.length !== t.length) return false

  for (let i = 0; i < s.length; i++) {
    // 比较每个字符在各自字符串中首次出现的位置
    if (s.indexOf(s[i]) !== t.indexOf(t[i])) {
      return false
    }
  }

  return true
}
