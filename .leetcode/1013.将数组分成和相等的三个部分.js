/*
 * @lc app=leetcode.cn id=1013 lang=javascript
 *
 * [1013] 将数组分成和相等的三个部分
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function (arr) {
  // 计算数组总和
  const totalSum = arr.reduce((sum, num) => sum + num, 0)

  // 如果总和不能被 3 整除，无法分成三等分，直接返回 false
  if (totalSum % 3 !== 0) {
    return false
  }

  const targetSum = totalSum / 3
  let currentSum = 0
  let count = 0 // 和为 targetSum 的连续片段（子数组）的个数

  // 遍历数组，寻找和为 targetSum 的子数组个数
  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i]

    // 如果当前累计和等于目标和
    if (currentSum === targetSum) {
      if (++count === 3) return true
      currentSum = 0 // 重置累计和，开始寻找下一个部分
    }
  }

  return false
}
// @lc code=end

// #region 1
// 时间复杂度：O(n)，只需要遍历数组一次
// 空间复杂度：O(1)，只使用了常数级别的额外空间
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function (arr) {
  // 计算数组总和
  const totalSum = arr.reduce((sum, num) => sum + num, 0)

  // 如果总和不能被 3 整除，无法分成三等分，直接返回 false
  if (totalSum % 3 !== 0) {
    return false
  }

  const targetSum = totalSum / 3
  let currentSum = 0
  let count = 0 // 和为 targetSum 的连续片段（子数组）的个数

  // 遍历数组，寻找和为 targetSum 的子数组个数
  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i]

    // 如果当前累计和等于目标和
    if (currentSum === targetSum) {
      if (++count === 3) return true
      currentSum = 0 // 重置累计和，开始寻找下一个部分
    }
  }

  return false
}
// #endregion
