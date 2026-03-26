/**
 * @param {number[]} nums
 * @return {number}
 */
var minLengthAfterRemovals = function(nums) {
  const n = nums.length
  const mid = nums[n >> 1]
  let lo = 0, hi = n
  while (lo < hi) { const m = (lo + hi) >> 1; if (nums[m] < mid) lo = m + 1; else hi = m }
  const left = lo
  lo = 0; hi = n
  while (lo < hi) { const m = (lo + hi) >> 1; if (nums[m] <= mid) lo = m + 1; else hi = m }
  const freq = lo - left
  return freq > (n >> 1) ? 2 * freq - n : n % 2
}
