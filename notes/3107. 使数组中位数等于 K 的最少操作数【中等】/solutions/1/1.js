/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperationsToMakeMedianK = function(nums, k) {
  nums.sort((a, b) => a - b)
  const n = nums.length
  const mid = Math.floor(n / 2)
  let ops = 0
  // 中位数位置的值需要等于 k
  // 所有 <= mid 位置中大于 k 的需要减小到 k
  // 所有 >= mid 位置中小于 k 的需要增大到 k
  for (let i = 0; i <= mid; i++) {
    if (nums[i] > k) ops += nums[i] - k
  }
  for (let i = mid; i < n; i++) {
    if (nums[i] < k) ops += k - nums[i]
  }
  return ops
}
