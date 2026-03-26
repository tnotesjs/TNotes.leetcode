/**
 * @param {number[]} cost
 * @param {number[]} time
 * @return {number}
 */
var paintWalls = function (cost, time) {
  const n = cost.length
  // dp[j] 表示刷 j 面墙的最小开销
  const dp = new Array(n + 1).fill(Infinity)
  dp[0] = 0
  for (let i = 0; i < n; i++) {
    for (let j = n; j >= 0; j--) {
      // 付费刷第 i 面墙，免费匠可在此期间刷 time[i] 面墙
      dp[Math.min(j + time[i] + 1, n)] = Math.min(
        dp[Math.min(j + time[i] + 1, n)],
        dp[j] + cost[i],
      )
    }
  }
  return dp[n]
}
