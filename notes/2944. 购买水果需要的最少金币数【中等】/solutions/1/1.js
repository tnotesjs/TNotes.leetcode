/**
 * @param {number[]} prices
 * @return {number}
 */
var minimumCoins = function (prices) {
  const n = prices.length
  // dp[i]: 获取水果 1..i 的最小花费（1-indexed）
  const dp = new Array(n + 1).fill(Infinity)
  dp[0] = 0
  for (let i = 1; i <= n; i++) {
    // 买水果 j 可覆盖到 2j，要覆盖 i 需 j >= ceil(i/2)
    for (let j = Math.ceil(i / 2); j <= i; j++) {
      dp[i] = Math.min(dp[i], dp[j - 1] + prices[j - 1])
    }
  }
  return dp[n]
}
