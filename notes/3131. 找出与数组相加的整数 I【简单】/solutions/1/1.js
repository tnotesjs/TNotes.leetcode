/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var addedInteger = function (nums1, nums2) {
  // x = min(nums2) - min(nums1)
  return Math.min(...nums2) - Math.min(...nums1)
}
