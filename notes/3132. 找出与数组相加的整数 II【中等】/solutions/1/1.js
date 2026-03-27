/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minimumAddedInteger = function(nums1, nums2) {
  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b)
  // 删除 2 个元素，尝试所有可能的 x = nums2[0] - nums1[i]
  // nums1 删除 2 个后，剩余元素加 x 等于 nums2
  for (let i = 2; i >= 0; i--) {
    const x = nums2[0] - nums1[i]
    // 检查 nums1 中是否有子序列（删除2个后）加 x 等于 nums2
    let j = 0
    for (let k = i; k < nums1.length && j < nums2.length; k++) {
      if (nums1[k] + x === nums2[j]) j++
    }
    if (j === nums2.length) return x
  }
  return 0
}
