/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function (nums, k) {
  const freq = new Map()
  let left = 0,
    maxLen = 0
  for (let right = 0; right < nums.length; right++) {
    freq.set(nums[right], (freq.get(nums[right]) || 0) + 1)
    while (freq.get(nums[right]) > k) {
      freq.set(nums[left], freq.get(nums[left]) - 1)
      left++
    }
    maxLen = Math.max(maxLen, right - left + 1)
  }
  return maxLen
}
