/**
 * @param {number} target
 * @param {number[][]} types
 * @return {number}
 */
var waysToReachTarget = function (target, types) {
  const MOD = 1000000007
  const dp = new Array(target + 1).fill(0)
  dp[0] = 1
  for (const [count, marks] of types) {
    for (let j = target; j >= marks; j--) {
      for (let t = 1; t <= count && t * marks <= j; t++) {
        dp[j] = (dp[j] + dp[j - t * marks]) % MOD
      }
    }
  }
  return dp[target]
}
