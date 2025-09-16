/*
 * @lc app=leetcode.cn id=476 lang=javascript
 *
 * [476] 数字的补数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  // 找到 num 的二进制位数
  let bitLength = num.toString(2).length

  // 构造相同位数的全1掩码
  let mask = (1 << bitLength) - 1

  // 异或运算得到补数
  return num ^ mask
}
// @lc code=end
