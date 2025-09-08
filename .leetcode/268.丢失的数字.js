/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 丢失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const n = nums.length
  let result = n // 初始化为 n，因为数组中缺少一个数

  // 对数组索引和数组元素进行异或运算
  for (let i = 0; i < n; i++) {
    result ^= i ^ nums[i]
  }

  return result
}
// @lc code=end

missingNumber([3, 0, 1]) // => 2
missingNumber([0, 1]) // => 2
missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]) // => 8
