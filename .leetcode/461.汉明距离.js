/*
 * @lc app=leetcode.cn id=461 lang=javascript
 *
 * [461] 汉明距离
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  // 异或运算，相同位为 0，不同位为 1
  let xor = x ^ y
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
