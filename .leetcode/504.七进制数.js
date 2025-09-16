/*
 * @lc app=leetcode.cn id=504 lang=javascript
 *
 * [504] 七进制数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
  // 处理特殊情况
  if (num === 0) {
    return '0'
  }

  // 处理负数
  let isNegative = false
  if (num < 0) {
    isNegative = true
    num = -num
  }

  let result = ''

  // 除 7 取余法
  while (num > 0) {
    result = (num % 7) + result
    num = Math.floor(num / 7)
  }

  // 添加符号
  return isNegative ? '-' + result : result
}
// @lc code=end
