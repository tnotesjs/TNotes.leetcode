/*
 * @lc app=leetcode.cn id=263 lang=javascript
 *
 * [263] 丑数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
  // 丑数必须是正整数
  if (n <= 0) return false

  // 分别除以 2、3、5 直到不能整除
  for (const factor of [2, 3, 5]) {
    while (n % factor === 0) {
      n /= factor
    }
  }

  // 如果最终结果是 1，则是丑数
  return n === 1
}
// @lc code=end
