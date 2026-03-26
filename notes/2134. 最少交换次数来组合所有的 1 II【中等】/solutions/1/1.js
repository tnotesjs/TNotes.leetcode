/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function (nums) {
  const n = nums.length
  const total = nums.reduce((s, v) => s + v, 0)
  if (total === 0) return 0
  // 统计窗口内 1 的数量
  let ones = 0
  for (let i = 0; i < total; i++) ones += nums[i]
  let maxOnes = ones
  for (let i = total; i < n + total; i++) {
    ones += nums[i % n]
    ones -= nums[(i - total) % n]
    maxOnes = Math.max(maxOnes, ones)
  }
  return total - maxOnes
}
