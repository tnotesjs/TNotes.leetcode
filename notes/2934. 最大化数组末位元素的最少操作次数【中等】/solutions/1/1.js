/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minOperations = function(nums1, nums2) {
  const n = nums1.length
  function count(last1, last2) {
    let ops = 0
    for (let i = 0; i < n - 1; i++) {
      if (nums1[i] <= last1 && nums2[i] <= last2) continue
      if (nums1[i] <= last2 && nums2[i] <= last1) { ops++; continue }
      return Infinity
    }
    return ops
  }
  const a = count(nums1[n - 1], nums2[n - 1])
  const b = 1 + count(nums2[n - 1], nums1[n - 1])
  const ans = Math.min(a, b)
  return ans === Infinity ? -1 : ans
}
