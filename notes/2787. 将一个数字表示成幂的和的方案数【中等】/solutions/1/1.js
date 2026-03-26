/**
 * @param {number} n
 * @param {number} x
 * @return {number}
 */
var numberOfWays = function (n, x) {
  const MOD = 1e9 + 7
  const dp = new Array(n + 1).fill(0)
  dp[0] = 1
  for (let i = 1; Math.pow(i, x) <= n; i++) {
    const v = Math.pow(i, x)
    for (let j = n; j >= v; j--) {
      dp[j] = (dp[j] + dp[j - v]) % MOD
    }
  }
  return dp[n]
}
