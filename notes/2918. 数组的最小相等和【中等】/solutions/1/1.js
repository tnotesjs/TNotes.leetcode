/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minSum = function(nums1, nums2) {
  let sum1 = 0, z1 = 0, sum2 = 0, z2 = 0
  for (const x of nums1) { sum1 += x; if (x === 0) z1++ }
  for (const x of nums2) { sum2 += x; if (x === 0) z2++ }
  const min1 = sum1 + z1, min2 = sum2 + z2
  if (min1 < min2 && z1 === 0) return -1
  if (min2 < min1 && z2 === 0) return -1
  return Math.max(min1, min2)
}
