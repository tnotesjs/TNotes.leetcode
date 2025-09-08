/*
 * @lc app=leetcode.cn id=561 lang=javascript
 *
 * [561] 数组拆分
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  // 对数组进行排序
  nums.sort((a, b) => a - b)

  let sum = 0

  // 每两个数分为一组，取每组的第一个数（较小的数）相加
  for (let i = 0; i < nums.length; i += 2) {
    sum += nums[i]
  }

  return sum
}
// @lc code=end

arrayPairSum([1, 4, 3, 2]) // => 4
arrayPairSum([6, 2, 6, 5, 1, 2]) // => 9
