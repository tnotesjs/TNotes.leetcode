/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  // 使用 filter 和 includes 查找交集，然后用 Set 去重
  return [...new Set(nums1.filter((num) => nums2.includes(num)))]
}
