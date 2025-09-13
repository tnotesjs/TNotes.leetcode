/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // 长度不同直接返回 false
  if (s.length !== t.length) return false

  // 使用对象记录字符出现次数
  const charCount = {}

  // 统计字符串 s 中每个字符的出现次数
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    charCount[char] = (charCount[char] || 0) + 1
  }

  // 遍历字符串 t，减少对应字符的计数
  for (let i = 0; i < t.length; i++) {
    const char = t[i]
    if (!charCount[char]) {
      return false
    }
    charCount[char]--
  }

  return true
}
