/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  // 先对两个数组排序
  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b)

  const result = []
  let i = 0,
    j = 0

  // 使用双指针查找交集
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      i++
    } else if (nums1[i] > nums2[j]) {
      j++
    } else {
      // 找到交集元素，注意：避免重复添加。
      if (result.length === 0 || result[result.length - 1] !== nums1[i]) {
        result.push(nums1[i])
      }
      i++
      j++
    }
  }

  return result
}
