/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  // 统计字符频次
  const map = new Map()

  for (const char of s) {
    map.set(char, (map.get(char) || 0) + 1)
  }

  // 找到第一个出现次数为 1 的字符
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) {
      return i
    }
  }

  return -1
}
