/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let length = 0
  let i = s.length - 1

  // 跳过尾部的空格
  while (i >= 0 && s[i] === ' ') {
    i--
  }

  // 计算最后一个单词的长度
  while (i >= 0 && s[i] !== ' ') {
    length++
    i--
  }

  return length
}
