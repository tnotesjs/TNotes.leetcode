/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const len1 = nums1.length
  const len2 = nums2.length
  // 统 nums1 集合中每个数字出现的次数
  const count = {}
  for (let i = 0; i < len1; i++) {
    const key = nums1[i]
    if (typeof count[key] === 'undefined') {
      count[key] = 1
    } else {
      count[key]++
    }
  }

  // 从 nums1 集合出发检查交集
  const result = []
  for (let i = 0; i < len2; i++) {
    const key = nums2[i]
    if (typeof count[key] === 'undefined' || count[key] === 0) {
      continue
    } else {
      count[key]--
      result.push(key)
    }
  }

  return result
}
