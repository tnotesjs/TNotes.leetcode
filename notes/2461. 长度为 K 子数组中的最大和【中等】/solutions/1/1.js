/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {
  const freq = new Map()
  let sum = 0, ans = 0
  for (let i = 0; i < nums.length; i++) {
    freq.set(nums[i], (freq.get(nums[i]) || 0) + 1)
    sum += nums[i]
    if (i >= k) {
      const left = nums[i - k]
      freq.set(left, freq.get(left) - 1)
      if (freq.get(left) === 0) freq.delete(left)
      sum -= left
    }
    if (i >= k - 1 && freq.size === k) {
      ans = Math.max(ans, sum)
    }
  }
  return ans
}
