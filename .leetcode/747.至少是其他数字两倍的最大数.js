/*
 * @lc app=leetcode.cn id=747 lang=javascript
 *
 * [747] 至少是其他数字两倍的最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  // 找到最大值和第二大值
  let max = -Infinity
  let secondMax = -Infinity
  let maxIndex = -1

  // 遍历数组找到最大值和第二大值
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      secondMax = max
      max = nums[i]
      maxIndex = i
    } else if (nums[i] > secondMax) {
      secondMax = nums[i]
    }
  }

  // 判断最大值是否至少是第二大值的两倍
  return max >= secondMax * 2 ? maxIndex : -1
}
// @lc code=end

// 解法.1 - 找最大和次大
// 时间复杂度：$O(n)$，只需要遍历数组一次
// 空间复杂度：$O(1)$，只使用了常数级别的额外空间
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var dominantIndex = function (nums) {
//   // 找到最大值和第二大值
//   let max = -Infinity
//   let secondMax = -Infinity
//   let maxIndex = -1

//   // 遍历数组找到最大值和第二大值
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > max) {
//       secondMax = max
//       max = nums[i]
//       maxIndex = i
//     } else if (nums[i] > secondMax) {
//       secondMax = nums[i]
//     }
//   }

//   // 判断最大值是否至少是第二大值的两倍
//   return max >= secondMax * 2 ? maxIndex : -1
// }
