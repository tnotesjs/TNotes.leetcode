/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function (days, costs) {
  const n = days.length
  const maxDay = days[n - 1]
  const dp = new Array(maxDay + 1).fill(0)
  const travelDays = new Set(days) // 用于快速判断某天是否需要旅行

  for (let i = 1; i <= maxDay; i++) {
    if (!travelDays.has(i)) {
      // 如果这一天不需要旅行，成本和前一天相同
      dp[i] = dp[i - 1]
    } else {
      // 需要旅行，选择三种票价的最小值
      dp[i] = Math.min(
        dp[Math.max(0, i - 1)] + costs[0], // 1天票
        dp[Math.max(0, i - 7)] + costs[1], // 7天票
        dp[Math.max(0, i - 30)] + costs[2], // 30天票
      )
    }
  }

  return dp[maxDay]
}
