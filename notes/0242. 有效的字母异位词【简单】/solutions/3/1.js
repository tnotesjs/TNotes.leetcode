/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // 长度不同直接返回 false
  if (s.length !== t.length) return false

  // 创建长度为 26 的数组，记录每个字母的出现次数
  const charCount = new Array(26).fill(0)

  // 统计字符出现次数差异
  for (let i = 0; i < s.length; i++) {
    charCount[s.charCodeAt(i) - 97]++ // s 中字符计数加 1
    charCount[t.charCodeAt(i) - 97]-- // t 中字符计数减 1
  }

  // 检查是否所有计数都为 0
  for (let i = 0; i < 26; i++) {
    if (charCount[i] !== 0) {
      return false
    }
  }

  return true
}
