/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * 牛顿迭代法
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x === 0) return 0

  let r = x
  while (r > x / r) {
    r = Math.floor((r + x / r) / 2)
  }

  return r
}
// @lc code=end
