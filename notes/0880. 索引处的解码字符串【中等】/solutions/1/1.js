/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var decodeAtIndex = function (s, k) {
  let size = 0
  for (const c of s) {
    if (c >= '2' && c <= '9') size *= Number(c)
    else size++
  }
  for (let i = s.length - 1; i >= 0; i--) {
    k %= size
    if (k === 0 && s[i] >= 'a' && s[i] <= 'z') return s[i]
    if (s[i] >= '2' && s[i] <= '9') size /= Number(s[i])
    else size--
  }
  return ''
}
