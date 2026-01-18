/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function (nums1, nums2) {
  const result = []
  let i = 0,
    j = 0

  while (i < nums1.length && j < nums2.length) {
    const [id1, val1] = nums1[i]
    const [id2, val2] = nums2[j]

    if (id1 === id2) {
      result.push([id1, val1 + val2])
      i++
      j++
    } else if (id1 < id2) {
      result.push([id1, val1])
      i++
    } else {
      result.push([id2, val2])
      j++
    }
  }

  // 添加剩余元素
  while (i < nums1.length) {
    result.push(nums1[i])
    i++
  }

  while (j < nums2.length) {
    result.push(nums2[j])
    j++
  }

  return result
}
