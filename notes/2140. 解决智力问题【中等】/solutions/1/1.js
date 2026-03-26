/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function (questions) {
  const n = questions.length
  const dp = new Array(n + 1).fill(0)
  for (let i = n - 1; i >= 0; i--) {
    const [points, brainpower] = questions[i]
    const next = i + brainpower + 1
    dp[i] = Math.max(dp[i + 1], points + (next < n ? dp[next] : 0))
  }
  return dp[0]
}
