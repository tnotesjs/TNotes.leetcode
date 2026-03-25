/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function (nums, x) {
  const n = nums.length
  const total = nums.reduce((a, b) => a + b, 0)
  const target = total - x
  if (target < 0) return -1
  if (target === 0) return n
  // 找和为 target 的最长子数组
  let left = 0,
    sum = 0,
    maxLen = -1
  for (let right = 0; right < n; right++) {
    sum += nums[right]
    while (sum > target) sum -= nums[left++]
    if (sum === target) maxLen = Math.max(maxLen, right - left + 1)
  }
  return maxLen === -1 ? -1 : n - maxLen
}
