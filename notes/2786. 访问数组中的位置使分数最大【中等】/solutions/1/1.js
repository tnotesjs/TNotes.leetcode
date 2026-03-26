/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var maxScore = function (nums, x) {
  // dp[0] = 以偶数结尾的最大分数，dp[1] = 以奇数结尾的最大分数
  const dp = [-Infinity, -Infinity]
  dp[nums[0] % 2] = nums[0]
  for (let i = 1; i < nums.length; i++) {
    const p = nums[i] % 2
    dp[p] = Math.max(dp[p] + nums[i], dp[1 - p] + nums[i] - x)
  }
  return Math.max(dp[0], dp[1])
}
