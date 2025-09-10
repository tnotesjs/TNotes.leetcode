/*
 * @lc app=leetcode.cn id=342 lang=javascript
 *
 * [342] 4的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  if (n <= 0) return false

  // 4 的幂在二进制中，1 只出现在奇数位置
  // 0x55555555 的二进制是 01010101010101010101010101010101
  // 这个掩码的奇数位都是 1，偶数位都是 0
  return (n & (n - 1)) === 0 && (n & 0x55555555) !== 0
}
// @lc code=end
