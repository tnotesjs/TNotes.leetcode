/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let bestSum = nums[0]
  let currentSum = nums[0]

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i])
    bestSum = Math.max(bestSum, currentSum)
  }

  return bestSum
}
