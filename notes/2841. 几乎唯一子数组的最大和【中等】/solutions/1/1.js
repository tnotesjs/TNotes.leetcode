/**
 * @param {number[]} nums
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var maxSum = function(nums, m, k) {
  const cnt = new Map()
  let sum = 0, ans = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    cnt.set(nums[i], (cnt.get(nums[i]) || 0) + 1)
    if (i >= k) {
      const old = nums[i - k]
      sum -= old
      cnt.set(old, cnt.get(old) - 1)
      if (cnt.get(old) === 0) cnt.delete(old)
    }
    if (i >= k - 1 && cnt.size >= m) ans = Math.max(ans, sum)
  }
  return ans
}
