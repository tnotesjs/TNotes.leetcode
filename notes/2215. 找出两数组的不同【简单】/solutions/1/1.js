/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  const s1 = new Set(nums1)
  const s2 = new Set(nums2)

  const a = []
  const b = []

  for (const x of s1) {
    if (!s2.has(x)) a.push(x)
  }
  for (const x of s2) {
    if (!s1.has(x)) b.push(x)
  }

  return [a, b]
}
