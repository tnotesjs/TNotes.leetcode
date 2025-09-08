/*
 * @lc app=leetcode.cn id=2399 lang=javascript
 *
 * [2399] 检查相同字母间的距离
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function (s, distance) {
  // 记录每个字符第一次出现的位置
  const firstIndex = new Map()

  // 遍历字符串
  for (let i = 0; i < s.length; i++) {
    const char = s[i]

    // 如果是第一次遇到该字符，记录位置
    if (!firstIndex.has(char)) {
      firstIndex.set(char, i)
    } else {
      // 如果是第二次遇到该字符，计算距离
      const charIndex = char.charCodeAt(0) - 'a'.charCodeAt(0)
      const actualDistance = i - firstIndex.get(char) - 1
      // 检查距离是否匹配
      if (actualDistance !== distance[charIndex]) {
        return false
      }
    }
  }

  return true
}
// @lc code=end
