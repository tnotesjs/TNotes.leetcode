/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTotalCost = function(nums) {
  const n = nums.length
  // dp: 在位置 i，是否开始新子数组
  // 子数组成本: a[0] - a[1] + a[2] - a[3] + ...
  // dp[i][0] = 位置 i 的符号为 +，dp[i][1] = 位置 i 的符号为 -
  let pos = nums[0], neg = -Infinity
  for (let i = 1; i < n; i++) {
    const newPos = Math.max(pos, neg) + nums[i]
    const newNeg = pos - nums[i]
    pos = newPos
    neg = newNeg
  }
  return Math.max(pos, neg)
}
