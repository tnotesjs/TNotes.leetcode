/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  let count = 0

  for (let i = 0; i < s.length; i++) {
    // 判断 i 是否指向一个单词的开头
    if (
      // 当前位置不是空，并且前一个位置是空
      (s[i] !== ' ' && s[i - 1] === ' ') ||
      // 【无前置空格的首词】当前位置不是空，并且是开始位置
      (s[i] !== ' ' && i === 0)
    ) {
      count++
    }
  }

  return count
}
