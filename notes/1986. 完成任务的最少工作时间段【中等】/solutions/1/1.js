/**
 * @param {number[]} tasks
 * @param {number} sessionTime
 * @return {number}
 */
var minSessions = function (tasks, sessionTime) {
  const n = tasks.length
  const total = 1 << n
  const subsetSum = new Array(total).fill(0)
  for (let mask = 1; mask < total; mask++) {
    const bit = mask & -mask
    const idx = Math.log2(bit)
    subsetSum[mask] = subsetSum[mask ^ bit] + tasks[idx]
  }
  const dp = new Array(total).fill(n)
  dp[0] = 0
  for (let mask = 1; mask < total; mask++) {
    for (let sub = mask; sub > 0; sub = (sub - 1) & mask) {
      if (subsetSum[sub] <= sessionTime) {
        dp[mask] = Math.min(dp[mask], dp[mask ^ sub] + 1)
      }
    }
  }
  return dp[total - 1]
}
