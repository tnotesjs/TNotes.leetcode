/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxNonDecreasingLength = function (nums1, nums2) {
  const n = nums1.length
  // dp1[i] 表示以 nums1[i] 结尾的最长非递减子数组长度
  // dp2[i] 表示以 nums2[i] 结尾的最长非递减子数组长度
  let dp1 = 1,
    dp2 = 1,
    res = 1
  for (let i = 1; i < n; i++) {
    let ndp1 = 1,
      ndp2 = 1
    if (nums1[i] >= nums1[i - 1]) ndp1 = Math.max(ndp1, dp1 + 1)
    if (nums1[i] >= nums2[i - 1]) ndp1 = Math.max(ndp1, dp2 + 1)
    if (nums2[i] >= nums1[i - 1]) ndp2 = Math.max(ndp2, dp1 + 1)
    if (nums2[i] >= nums2[i - 1]) ndp2 = Math.max(ndp2, dp2 + 1)
    dp1 = ndp1
    dp2 = ndp2
    res = Math.max(res, dp1, dp2)
  }
  return res
}
