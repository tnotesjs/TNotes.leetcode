/*
 * @lc app=leetcode.cn id=258 lang=javascript
 *
 * [258] 各位相加
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  // 数字根公式：
  // 如果 num 为 0，结果为 0
  // 如果 num 能被 9 整除且不为 0，结果为 9
  // 否则结果为 num % 9
  if (num === 0) return 0
  return num % 9 === 0 ? 9 : num % 9
}
// @lc code=end
