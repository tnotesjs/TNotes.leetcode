/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
// #region - 使用 Set
// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var findDisappearedNumbers = function (nums) {
//   const numSet = new Set(nums)
//   const result = []

//   for (let i = 1; i <= nums.length; i++) {
//     if (!numSet.has(i)) {
//       result.push(i)
//     }
//   }

//   return result
// }
// #endregion

// #region - 原地修改
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  // 将出现过的数字对应的索引位置的值变为负数
  for (let i = 0; i < nums.length; i++) {
    const index = Math.abs(nums[i]) - 1
    if (nums[index] > 0) {
      nums[index] = -nums[index]
    }
  }

  // 找出仍为正数的位置，这些位置对应的数字就是缺失的
  const result = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      result.push(i + 1)
    }
  }

  return result
}
// #endregion
// @lc code=end

findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]) // => [5, 6]
findDisappearedNumbers([1, 1]) // => [2]
