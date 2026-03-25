/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minAbsoluteSumDiff = function (nums1, nums2) {
  const MOD = 1e9 + 7
  const sorted = [...nums1].sort((a, b) => a - b)
  const n = nums1.length
  let totalDiff = 0
  let maxImprove = 0
  for (let i = 0; i < n; i++) {
    const diff = Math.abs(nums1[i] - nums2[i])
    totalDiff += diff
    // 二分查找 sorted 中最接近 nums2[i] 的值
    let lo = 0,
      hi = n - 1
    while (lo < hi) {
      const mid = (lo + hi) >> 1
      if (sorted[mid] < nums2[i]) lo = mid + 1
      else hi = mid
    }
    let best = Math.abs(sorted[lo] - nums2[i])
    if (lo > 0) best = Math.min(best, Math.abs(sorted[lo - 1] - nums2[i]))
    maxImprove = Math.max(maxImprove, diff - best)
  }
  return (((totalDiff - maxImprove) % MOD) + MOD) % MOD
}
