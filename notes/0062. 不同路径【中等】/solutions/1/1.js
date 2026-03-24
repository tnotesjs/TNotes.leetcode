/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const dp = new Array(n).fill(1) // 第一行全为 1
  for (let i = 1; i < m; i++) for (let j = 1; j < n; j++) dp[j] += dp[j - 1] // dp[j] = 上方 + 左方
  return dp[n - 1]
}
