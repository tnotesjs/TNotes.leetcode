/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minNumber = function (nums1, nums2) {
  // 使用集合存储 nums1 中的数字
  const set = new Set(nums1)
  let minCommon = Infinity

  // 查找公共数字
  for (const num of nums2) {
    if (set.has(num)) {
      minCommon = Math.min(minCommon, num)
    }
  }

  // 如果有公共数字，返回最小的公共数字
  if (minCommon !== Infinity) {
    return minCommon
  }

  // 没有公共数字，取两个数组的最小值组成两位数
  const min1 = Math.min(...nums1)
  const min2 = Math.min(...nums2)

  // 较小的数字放在前面
  return Math.min(min1 * 10 + min2, min2 * 10 + min1)
}
