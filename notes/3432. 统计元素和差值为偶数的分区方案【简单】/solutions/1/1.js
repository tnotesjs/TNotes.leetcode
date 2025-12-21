/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function (nums) {
  const n = nums.length
  const total = nums.reduce((a, b) => a + b, 0)

  // 左子数组和 - 右子数组和 = 2 * 左子数组和 - total
  // 要使差值为偶数，则 total 必须为偶数
  if (total % 2 !== 0) return 0

  // 如果 total 为偶数，所有 n-1 种分区方案都满足条件
  return n - 1
}
