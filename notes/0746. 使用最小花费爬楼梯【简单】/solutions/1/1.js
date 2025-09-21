/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const n = cost.length
  // dp[i] 表示到达第i个台阶的最小花费
  const dp = new Array(n + 1)

  // 初始状态：可以从第0个或第1个台阶开始，所以花费为0
  dp[0] = 0
  dp[1] = 0

  // 状态转移：到达第i个台阶可以从第i-1或第i-2个台阶而来
  for (let i = 2; i <= n; i++) {
    dp[i] = Math.min(
      dp[i - 1] + cost[i - 1], // 从第i-1个台阶爬上来
      dp[i - 2] + cost[i - 2] // 从第i-2个台阶爬上来
    )
  }

  return dp[n] // 到达楼梯顶部的最小花费
}
