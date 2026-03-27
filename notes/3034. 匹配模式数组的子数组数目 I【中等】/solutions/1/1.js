/**
 * @param {number[]} nums
 * @param {number[]} pattern
 * @return {number}
 */
var countMatchingSubarrays = function(nums, pattern) {
  const n = nums.length, m = pattern.length
  let count = 0
  for (let i = 0; i <= n - m - 1; i++) {
    let match = true
    for (let k = 0; k < m; k++) {
      const diff = nums[i + k + 1] - nums[i + k]
      const p = diff > 0 ? 1 : diff < 0 ? -1 : 0
      if (p !== pattern[k]) { match = false; break }
    }
    if (match) count++
  }
  return count
}
