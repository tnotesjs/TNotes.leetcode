/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function (n, k, target) {
  const MOD = 1e9 + 7
  const dp = Array.from({ length: n + 1 }, () => new Array(target + 1).fill(0))
  dp[0][0] = 1
  for (let i = 1; i <= n; i++) {
    for (let j = i; j <= target; j++) {
      for (let f = 1; f <= k && f <= j; f++) {
        dp[i][j] = (dp[i][j] + dp[i - 1][j - f]) % MOD
      }
    }
  }
  return dp[n][target]
}
