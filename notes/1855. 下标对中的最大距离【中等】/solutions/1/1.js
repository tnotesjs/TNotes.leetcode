/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDistance = function (nums1, nums2) {
  let ans = 0,
    i = 0,
    j = 0
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] > nums2[j]) {
      i++
    } else {
      ans = Math.max(ans, j - i)
      j++
    }
  }
  return ans
}
