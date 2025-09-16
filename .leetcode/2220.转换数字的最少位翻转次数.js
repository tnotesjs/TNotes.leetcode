/*
 * @lc app=leetcode.cn id=2220 lang=javascript
 *
 * [2220] 转换数字的最少位翻转次数
 */

// @lc code=start
/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function (start, goal) {
  // 异或运算，相同位为 0，不同位为 1
  let xor = start ^ goal
  let distance = 0

  // 统计异或结果中 1 的个数
  while (xor > 0) {
    // 检查最低位是否为 1
    if (xor & 1) {
      distance++
    }
    // 右移一位
    xor >>= 1
  }

  return distance
}
// @lc code=end
