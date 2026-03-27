/**
 * @param {number[]} rewardValues
 * @return {number}
 */
var maxTotalReward = function(rewardValues) {
  rewardValues.sort((a, b) => a - b)
  const vals = [...new Set(rewardValues)]
  const maxVal = vals[vals.length - 1]
  // dp[x] = 是否能达到总奖励 x
  const dp = new Array(2 * maxVal).fill(false)
  dp[0] = true
  for (const v of vals) {
    // x < v 时可以加入 v
    for (let x = v - 1; x >= 0; x--) {
      if (dp[x]) dp[x + v] = true
    }
  }
  for (let i = dp.length - 1; i >= 0; i--) {
    if (dp[i]) return i
  }
  return 0
}
