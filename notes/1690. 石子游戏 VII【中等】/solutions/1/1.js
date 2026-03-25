/**
 * @param {number[]} stones
 * @return {number}
 */
var stoneGameVII = function (stones) {
  const n = stones.length
  const prefix = new Array(n + 1).fill(0)
  for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] + stones[i]
  // dp[i][j] = 区间 [i,j] 先手与后手的最大分差
  const dp = Array.from({ length: n }, () => new Array(n).fill(0))
  for (let len = 2; len <= n; len++) {
    for (let i = 0; i <= n - len; i++) {
      const j = i + len - 1
      const sum_ij = prefix[j + 1] - prefix[i]
      // 移除左端: 得分 sum_ij - stones[i], 对手 dp[i+1][j]
      // 移除右端: 得分 sum_ij - stones[j], 对手 dp[i][j-1]
      dp[i][j] = Math.max(
        sum_ij - stones[i] - dp[i + 1][j],
        sum_ij - stones[j] - dp[i][j - 1],
      )
    }
  }
  return dp[0][n - 1]
}
