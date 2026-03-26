/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums1, nums2, k) {
  if (k === 0) {
    for (let i = 0; i < nums1.length; i++)
      if (nums1[i] !== nums2[i]) return -1
    return 0
  }
  let ops = 0, sum = 0
  for (let i = 0; i < nums1.length; i++) {
    const diff = nums2[i] - nums1[i]
    if (diff % k !== 0) return -1
    sum += diff
    if (diff > 0) ops += diff / k
  }
  return sum === 0 ? ops : -1
}
