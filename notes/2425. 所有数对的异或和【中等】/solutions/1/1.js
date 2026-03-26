/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var xorAllNums = function (nums1, nums2) {
  let res = 0
  if (nums2.length % 2 === 1) {
    for (const x of nums1) res ^= x
  }
  if (nums1.length % 2 === 1) {
    for (const x of nums2) res ^= x
  }
  return res
}
