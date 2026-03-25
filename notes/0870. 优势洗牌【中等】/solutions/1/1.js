/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var advantageCount = function (nums1, nums2) {
  const n = nums1.length
  nums1.sort((a, b) => a - b)
  const idx = Array.from({ length: n }, (_, i) => i).sort(
    (a, b) => nums2[b] - nums2[a],
  )
  const res = new Array(n)
  let lo = 0,
    hi = n - 1
  for (const i of idx) {
    if (nums1[hi] > nums2[i]) res[i] = nums1[hi--]
    else res[i] = nums1[lo++]
  }
  return res
}
