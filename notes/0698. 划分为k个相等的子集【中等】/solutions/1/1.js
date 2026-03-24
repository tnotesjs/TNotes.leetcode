/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function (nums, k) {
  const sum = nums.reduce((a, b) => a + b, 0)
  if (sum % k !== 0) return false
  const target = sum / k
  nums.sort((a, b) => b - a)
  if (nums[0] > target) return false
  const buckets = new Array(k).fill(0)
  const backtrack = (idx) => {
    if (idx === nums.length) return true
    const seen = new Set()
    for (let i = 0; i < k; i++) {
      if (seen.has(buckets[i])) continue
      if (buckets[i] + nums[idx] > target) continue
      seen.add(buckets[i])
      buckets[i] += nums[idx]
      if (backtrack(idx + 1)) return true
      buckets[i] -= nums[idx]
    }
    return false
  }
  return backtrack(0)
}
