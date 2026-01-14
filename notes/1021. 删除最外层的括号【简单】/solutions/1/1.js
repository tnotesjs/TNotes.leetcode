/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let bal = 0
  let res = ''
  for (const ch of s) {
    if (ch === '(') {
      // 只有当 bal > 0 时，才是内层括号
      if (bal > 0) res += ch
      // 后自增
      bal++
    } else {
      // 先自减
      bal--
      // 只有当 bal > 0 时，才是内层括号
      if (bal > 0) res += ch
    }
  }
  return res
}
