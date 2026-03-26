/**
 * @param {number} n
 * @param {number[][]} offers
 * @return {number}
 */
var maximizeTheProfit = function(n, offers) {
  const groups = Array.from({length: n}, () => [])
  for (const [s, e, g] of offers) {
    groups[e].push([s, g])
  }
  const dp = new Array(n + 1).fill(0)
  for (let i = 0; i < n; i++) {
    dp[i + 1] = dp[i]
    for (const [s, g] of groups[i]) {
      dp[i + 1] = Math.max(dp[i + 1], dp[s] + g)
    }
  }
  return dp[n]
}
