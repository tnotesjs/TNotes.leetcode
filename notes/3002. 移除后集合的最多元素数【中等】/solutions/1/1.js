/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maximumSetSize = function (nums1, nums2) {
  const n = nums1.length
  const half = n / 2
  const set1 = new Set(nums1)
  const set2 = new Set(nums2)
  let common = 0
  for (const x of set1) {
    if (set2.has(x)) common++
  }
  const only1 = set1.size - common
  const only2 = set2.size - common
  const take1 = Math.min(only1, half)
  const take2 = Math.min(only2, half)
  const rem = half - take1 + (half - take2)
  return take1 + take2 + Math.min(common, rem)
}
