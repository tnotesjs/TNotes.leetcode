/*
 * @lc app=leetcode.cn id=796 lang=javascript
 *
 * [796] 旋转字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  // 长度不同则不可能通过旋转得到
  if (s.length !== goal.length) {
    return false
  }

  // 空字符串的情况
  if (s.length === 0) {
    return true
  }

  // 如果goal可以通过旋转s得到，那么goal一定是s+s的子串
  return isSubstring(s + s, goal)
}

// KMP算法检查substring是否为string的子串
const isSubstring = (string, substring) => {
  return string.indexOf(substring) !== -1
}
// @lc code=end
