/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
  // 如果存在小于 k 的元素，无法实现
  if (nums.some((x) => x < k)) return -1

  // 统计大于 k 的不同值的个数
  const uniqueGreaterThanK = new Set(nums.filter((x) => x > k))

  return uniqueGreaterThanK.size
}
