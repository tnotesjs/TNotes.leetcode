/**
 * @param {number} n
 * @param {number[][]} rides
 * @return {number}
 */
var maxTaxiEarnings = function (n, rides) {
  const endMap = new Map()
  for (const [s, e, t] of rides) {
    if (!endMap.has(e)) endMap.set(e, [])
    endMap.get(e).push([s, t])
  }
  const dp = new Array(n + 1).fill(0)
  for (let i = 1; i <= n; i++) {
    dp[i] = dp[i - 1]
    if (endMap.has(i)) {
      for (const [s, t] of endMap.get(i)) {
        dp[i] = Math.max(dp[i], dp[s] + (i - s) + t)
      }
    }
  }
  return dp[n]
}
