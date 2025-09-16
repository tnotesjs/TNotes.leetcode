/*
 * @lc app=leetcode.cn id=507 lang=javascript
 *
 * [507] 完美数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
  // 在 32 位整数范围内，已知的完美数只有这几个
  return (
    num === 6 || num === 28 || num === 496 || num === 8128 || num === 33550336
  )
}
// @lc code=end
