/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
  let totalSum = 0
  let maxSum = nums[0],
    curMax = 0
  let minSum = nums[0],
    curMin = 0

  for (const num of nums) {
    totalSum += num
    curMax = Math.max(curMax + num, num)
    maxSum = Math.max(maxSum, curMax)
    curMin = Math.min(curMin + num, num)
    minSum = Math.min(minSum, curMin)
  }

  // 所有元素都为负数时，maxSum 即为最大元素
  return maxSum > 0 ? Math.max(maxSum, totalSum - minSum) : maxSum
}
