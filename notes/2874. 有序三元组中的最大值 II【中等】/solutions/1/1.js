/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function (nums) {
  let ans = 0,
    maxDiff = 0,
    prefixMax = 0
  for (const x of nums) {
    ans = Math.max(ans, maxDiff * x) // x 作为 nums[k]
    maxDiff = Math.max(maxDiff, prefixMax - x) // x 作为 nums[j]
    prefixMax = Math.max(prefixMax, x) // x 作为 nums[i]
  }
  return ans
}
