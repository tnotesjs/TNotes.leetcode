/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  if (nums.length === 0) {
    return 0
  }

  let maxLen = 1 // 至少有一个元素
  let currentLen = 1 // 当前连续递增序列长度

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      // 如果当前元素大于前一个元素，递增序列继续
      currentLen++
      // 更新最大长度
      maxLen = Math.max(maxLen, currentLen)
    } else {
      // 如果不满足递增条件，重置当前长度
      currentLen = 1
    }
  }

  return maxLen
}
// @lc code=end

// #region 1
/* 
暴力解法：
上坡不断增加 currentLen，并跟当前的 maxLen 进行比较，如果当前长度大于 maxLen，则更新 maxLen
一旦遇到下坡，则重置 currentLen
时间复杂度：$O(n)$，其中 n 是数组长度，需要遍历数组一次。
空间复杂度：$O(1)$，只使用了常数级别的额外变量空间。
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  if (nums.length === 0) {
    return 0
  }

  let maxLen = 1 // 至少有一个元素
  let currentLen = 1 // 当前连续递增序列长度

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      // 如果当前元素大于前一个元素，递增序列继续
      currentLen++
      // 更新最大长度
      maxLen = Math.max(maxLen, currentLen)
    } else {
      // 如果不满足递增条件，重置当前长度
      currentLen = 1
    }
  }

  return maxLen
}
// #endregion
