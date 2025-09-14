/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  // 第一次遍历：统计每个字符的出现次数
  const charCount = new Array(26).fill(0)

  for (const char of s) {
    charCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++
  }

  // 第二次遍历：找到第一个出现次数为 1 的字符
  for (let i = 0; i < s.length; i++) {
    if (charCount[s[i].charCodeAt(0) - 'a'.charCodeAt(0)] === 1) {
      return i
    }
  }

  return -1
}
