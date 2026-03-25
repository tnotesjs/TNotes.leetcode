/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
var bestTeamScore = function (scores, ages) {
  const n = scores.length
  const idx = Array.from({ length: n }, (_, i) => i)
  idx.sort((a, b) => ages[a] - ages[b] || scores[a] - scores[b])
  const dp = new Array(n)
  let res = 0
  for (let i = 0; i < n; i++) {
    dp[i] = scores[idx[i]]
    for (let j = 0; j < i; j++) {
      if (scores[idx[j]] <= scores[idx[i]])
        dp[i] = Math.max(dp[i], dp[j] + scores[idx[i]])
    }
    res = Math.max(res, dp[i])
  }
  return res
}
