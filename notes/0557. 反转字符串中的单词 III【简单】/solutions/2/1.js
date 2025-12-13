/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let result = ''
  let start = 0

  for (let i = 0; i <= s.length; i++) {
    if (i === s.length || s[i] === ' ') {
      // 反转当前单词
      for (let j = i - 1; j >= start; j--) {
        result += s[j]
      }
      if (i < s.length) result += ' '
      start = i + 1
    }
  }

  return result
}
