/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function (nums, k) {
  // 找到数组中的最大值
  const max = Math.max(...nums)

  // 等差数列求和：max, max+1, max+2, ..., max+k-1
  // 首项 a1 = max，末项 ak = max + k - 1，项数 = k
  // S = (首项 + 末项) × 项数 / 2
  return ((max + max + k - 1) * k) / 2
}
