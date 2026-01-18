/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function (words, s) {
  // 检查长度是否匹配
  if (words.length !== s.length) return false

  // 检查每个单词的首字母是否匹配
  for (let i = 0; i < words.length; i++) {
    if (words[i][0] !== s[i]) {
      return false
    }
  }

  return true
}
