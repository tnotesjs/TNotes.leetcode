/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let bal = 0
  let res = ''
  for (const ch of s) {
    if (ch === '(') {
      if (bal > 0) res += ch
      bal++
    } else {
      bal--
      if (bal > 0) res += ch
    }
  }
  return res
}
