/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const n = cost.length
  // 只需要记录前两个状态
  let prev2 = 0 // dp[i-2]
  let prev1 = 0 // dp[i-1]

  for (let i = 2; i <= n; i++) {
    const current = Math.min(
      prev1 + cost[i - 1], // 从第i-1个台阶爬上来
      prev2 + cost[i - 2] // 从第i-2个台阶爬上来
    )
    prev2 = prev1
    prev1 = current
  }

  return prev1
}
