/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function (arr, k) {
  const n = arr.length
  const dp = new Array(n + 1).fill(0)
  for (let i = 1; i <= n; i++) {
    let maxVal = 0
    for (let j = 1; j <= Math.min(i, k); j++) {
      maxVal = Math.max(maxVal, arr[i - j])
      dp[i] = Math.max(dp[i], dp[i - j] + maxVal * j)
    }
  }
  return dp[n]
}
