/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function (s, words) {
  let built = ''

  for (const w of words) {
    built += w
    // 如果拼接后恰好等于 s，返回 true
    if (built === s) {
      return true
    }
    // 如果拼接后已经超过 s 的长度，说明无法匹配
    if (built.length > s.length) {
      return false
    }
  }

  return false
}
