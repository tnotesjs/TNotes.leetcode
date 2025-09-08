/*
 * @lc app=leetcode.cn id=905 lang=javascript
 *
 * [905] 按奇偶排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  const result = []

  // 先添加所有偶数
  for (const num of nums) {
    if (num % 2 === 0) {
      result.push(num)
    }
  }

  // 再添加所有奇数
  for (const num of nums) {
    if (num % 2 === 1) {
      result.push(num)
    }
  }

  return result
}
// @lc code=end

// solutions.2 - 新建数组，不破坏原数组

// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var sortArrayByParity = function (nums) {
//   const result = []

//   // 先添加所有偶数
//   for (const num of nums) {
//     if (num % 2 === 0) {
//       result.push(num)
//     }
//   }

//   // 再添加所有奇数
//   for (const num of nums) {
//     if (num % 2 === 1) {
//       result.push(num)
//     }
//   }

//   return result
// }

// solutions.1 - 双指针
// 时间复杂度：$O(n)$，其中n是数组长度，每个元素最多被访问一次
// 空间复杂度：$O(1)$，只使用了常数级别的额外空间，原地修改数组
// 1.1.js
// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var sortArrayByParity = function (nums) {
//   let left = 0
//   let right = nums.length - 1

//   while (left < right) {
//     // 如果左边是偶数，左指针右移
//     if (nums[left] % 2 === 0) {
//       left++
//     }
//     // 如果右边是奇数，右指针左移
//     else if (nums[right] % 2 === 1) {
//       right--
//     }
//     // 左边是奇数，右边是偶数，交换两者
//     else {
//       ;[nums[left], nums[right]] = [nums[right], nums[left]]
//       left++
//       right--
//     }
//   }

//   return nums
// }

// 1.2.js
// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var sortArrayByParity = function (nums) {
//   let left = 0
//   let right = nums.length - 1

//   while (left < right) {
//     // 确保 left 指向奇数
//     while (left < right && nums[left] % 2 === 0) left++
//     // 确保 right 指向偶数
//     while (left < right && nums[right] % 2 === 1) right--

//     // 如果指针仍然有效，交换奇偶数
//     if (left < right) {
//       ;[nums[left], nums[right]] = [nums[right], nums[left]]
//       left++
//       right--
//     }
//   }

//   return nums
// }
