/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function (s) {
  let res = 0,
    open = 0 // open: 未匹配的左括号数
  let i = 0
  while (i < s.length) {
    if (s[i] === '(') {
      open++
      i++
    } else {
      // 需要两个连续 ')'
      if (i + 1 < s.length && s[i + 1] === ')') {
        i += 2
      } else {
        res++ // 插入一个 ')'
        i++
      }
      if (open > 0) open--
      else res++ // 插入一个 '('
    }
  }
  res += open * 2 // 每个未匹配 '(' 需要 2 个 ')'
  return res
}
