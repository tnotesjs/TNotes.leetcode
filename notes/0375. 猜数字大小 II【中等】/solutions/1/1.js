/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function (n) {
  const dp = Array.from({ length: n + 2 }, () => new Array(n + 2).fill(0))
  for (let len = 2; len <= n; len++) {
    for (let i = 1; i + len - 1 <= n; i++) {
      const j = i + len - 1
      dp[i][j] = Infinity
      for (let k = i; k <= j; k++) {
        const cost = k + Math.max(dp[i][k - 1], dp[k + 1][j])
        dp[i][j] = Math.min(dp[i][j], cost)
      }
    }
  }
  return dp[1][n]
}
