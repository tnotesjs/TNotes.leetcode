/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const result = []

  for (const num of nums1) {
    const index = nums2.indexOf(num)
    if (index !== -1) {
      result.push(num)
      nums2.splice(index, 1) // 移除已匹配的元素
    }
  }

  return result
}
