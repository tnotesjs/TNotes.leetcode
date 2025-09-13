/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  // 使用 Set 对两个数组去重
  const set1 = new Set(nums1)
  const set2 = new Set(nums2)

  // 存储交集结果
  const result = []

  // 遍历较小的集合，提高效率
  const [smallerSet, largerSet] =
    set1.size < set2.size ? [set1, set2] : [set2, set1]

  // 查找交集元素
  for (const num of smallerSet) {
    if (largerSet.has(num)) {
      result.push(num)
    }
  }

  return result
}
