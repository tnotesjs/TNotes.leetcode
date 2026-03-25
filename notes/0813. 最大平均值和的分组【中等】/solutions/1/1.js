/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumOfAverages = function (nums, k) {
  const n = nums.length
  const prefix = new Array(n + 1).fill(0)
  for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] + nums[i]
  const dp = Array.from({ length: n + 1 }, () => new Array(k + 1).fill(0))
  for (let i = 1; i <= n; i++) dp[i][1] = prefix[i] / i
  for (let j = 2; j <= k; j++)
    for (let i = j; i <= n; i++)
      for (let p = j - 1; p < i; p++)
        dp[i][j] = Math.max(
          dp[i][j],
          dp[p][j - 1] + (prefix[i] - prefix[p]) / (i - p),
        )
  return dp[n][k]
}
