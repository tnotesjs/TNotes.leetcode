/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
  nums.sort((a, b) => a - b)
  let sum = 0
  let minAbs = Infinity
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0 && k > 0) {
      nums[i] = -nums[i]
      k--
    }
    sum += nums[i]
    if (Math.abs(nums[i]) < minAbs) minAbs = Math.abs(nums[i])
  }
  if (k % 2 === 1) sum -= 2 * minAbs
  return sum
}
