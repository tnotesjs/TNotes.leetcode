/*
 * @lc app=leetcode.cn id=260 lang=javascript
 *
 * [260] 只出现一次的数字 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  let xor = 0

  // 全部异或，得到两个只出现一次的数的异或值
  for (const num of nums) {
    xor ^= num
  }

  // 找到最低位为 1 的掩码
  const rightmostBit = xor & ~(xor - 1)

  let num1 = 0
  let num2 = 0

  // 根据最低位 1 分组
  for (const num of nums) {
    if (num & rightmostBit) {
      num1 ^= num
    } else {
      num2 ^= num
    }
  }

  return [num1, num2]
}
// @lc code=end
