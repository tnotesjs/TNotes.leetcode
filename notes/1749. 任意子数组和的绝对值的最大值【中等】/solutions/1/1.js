/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function (nums) {
  let maxSum = 0,
    minSum = 0,
    curMax = 0,
    curMin = 0
  for (const x of nums) {
    curMax = Math.max(curMax + x, x)
    curMin = Math.min(curMin + x, x)
    maxSum = Math.max(maxSum, curMax)
    minSum = Math.min(minSum, curMin)
  }
  return Math.max(maxSum, -minSum)
}
