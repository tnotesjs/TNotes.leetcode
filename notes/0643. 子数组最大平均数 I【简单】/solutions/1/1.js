/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  // 计算前 k 个元素的和
  let sum = 0
  for (let i = 0; i < k; i++) {
    sum += nums[i]
  }

  let maxSum = sum

  // 滑动窗口
  for (let i = k; i < nums.length; i++) {
    sum = sum - nums[i - k] + nums[i]
    maxSum = Math.max(maxSum, sum)
  }

  return maxSum / k
}
