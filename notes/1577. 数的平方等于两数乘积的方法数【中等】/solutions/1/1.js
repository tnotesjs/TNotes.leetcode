/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var numTriplets = function (nums1, nums2) {
  const count = (sq, arr) => {
    let res = 0
    for (const s of sq) {
      const target = s * s
      const map = new Map()
      for (const x of arr) {
        if (target % x === 0) res += map.get(target / x) || 0
        map.set(x, (map.get(x) || 0) + 1)
      }
    }
    return res
  }
  return count(nums1, nums2) + count(nums2, nums1)
}
