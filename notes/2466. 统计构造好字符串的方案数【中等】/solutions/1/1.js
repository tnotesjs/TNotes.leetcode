/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
var countGoodStrings = function (low, high, zero, one) {
  const MOD = 1e9 + 7
  const dp = new Array(high + 1).fill(0)
  dp[0] = 1
  let ans = 0
  for (let i = 1; i <= high; i++) {
    if (i >= zero) dp[i] = (dp[i] + dp[i - zero]) % MOD
    if (i >= one) dp[i] = (dp[i] + dp[i - one]) % MOD
    if (i >= low) ans = (ans + dp[i]) % MOD
  }
  return ans
}
