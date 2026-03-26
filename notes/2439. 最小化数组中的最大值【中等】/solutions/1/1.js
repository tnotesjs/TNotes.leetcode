/**
 * @param {number[]} nums
 * @return {number}
 */
var minimizeArrayValue = function (nums) {
  let ans = 0
  let prefixSum = 0
  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i]
    ans = Math.max(ans, Math.ceil(prefixSum / (i + 1)))
  }
  return ans
}
