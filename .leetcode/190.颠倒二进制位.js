/*
 * @lc app=leetcode.cn id=190 lang=javascript
 *
 * [190] 颠倒二进制位
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function (n) {
  let result = 0

  for (let i = 0; i < 32; i++) {
    // 将结果左移一位，为新位腾出空间
    result <<= 1
    // 取 n 的最低位，将其放到 result 的最低位
    result |= n & 1
    // 将 n 右移一位，准备处理下一位
    n >>= 1
  }

  // 由于 JS 中所有数字都是有符号 32 位整数，
  // 需要将其转换为无符号 32 位整数
  return result >>> 0
}
// @lc code=end
/* 
- 注解：`return result >>> 0`
- `>>>` 是 JS 中的无符号右移操作符。当我们对一个数执行 `>>> 0` 操作时：
  1. 将该数转换为32位无符号整数
  2. 由于右移0位，数值本身不变
  3. 但结果被解释为无符号整数
- 如果我们不使用 `>>> 0`，JS 可能会将结果解释为负数，导致返回错误的值。
*/
