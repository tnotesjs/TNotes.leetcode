/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function (nums1, nums2) {
  const set1 = new Set(nums1)
  const set2 = new Set(nums2)
  let answer1 = 0
  let answer2 = 0
  // 统计 nums1 中在 nums2 中出现的元素个数
  for (const num of nums1) {
    if (set2.has(num)) {
      answer1++
    }
  }
  // 统计 nums2 中在 nums1 中出现的元素个数
  for (const num of nums2) {
    if (set1.has(num)) {
      answer2++
    }
  }
  return [answer1, answer2]
}
