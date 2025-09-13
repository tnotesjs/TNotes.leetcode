/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  // 优化：让较小的数组构建哈希表
  if (nums1.length > nums2.length) {
    return intersect(nums2, nums1)
  }

  // 使用哈希表统计 nums1 中每个元素的出现次数
  const map = new Map()
  for (const num of nums1) {
    map.set(num, (map.get(num) || 0) + 1)
  }

  const result = []

  // 遍历 nums2，查找交集
  for (const num of nums2) {
    if (map.has(num) && map.get(num) > 0) {
      result.push(num)
      map.set(num, map.get(num) - 1) // 减少计数
    }
  }

  return result
}
