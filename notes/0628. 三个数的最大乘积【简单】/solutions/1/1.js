/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  // 对数组进行排序
  nums.sort((a, b) => a - b)

  const n = nums.length

  // 最大乘积可能来自两种情况：
  return Math.max(
    nums[n - 1] * nums[n - 2] * nums[n - 3], // 1. 三个最大数
    nums[0] * nums[1] * nums[n - 1] // 2. 两个最小数与最大数
  )
}
