/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} x
 * @return {number}
 */
var minimumTime = function (nums1, nums2, x) {
  const n = nums1.length
  const s1 = nums1.reduce((a, b) => a + b, 0)
  const s2 = nums2.reduce((a, b) => a + b, 0)
  const idx = Array.from({ length: n }, (_, i) => i)
  idx.sort((a, b) => nums2[a] - nums2[b])
  // dp[j] = 从前 i 个元素中选 j 个重置的最大总节省
  const dp = new Array(n + 1).fill(0)
  for (let i = 0; i < n; i++) {
    const a = nums1[idx[i]],
      b = nums2[idx[i]]
    for (let j = i + 1; j >= 1; j--) {
      dp[j] = Math.max(dp[j], dp[j - 1] + a + b * j)
    }
  }
  for (let t = 0; t <= n; t++) {
    if (s1 + s2 * t - dp[t] <= x) return t
  }
  return -1
}
