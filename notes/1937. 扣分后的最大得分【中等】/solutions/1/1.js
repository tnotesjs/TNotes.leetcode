/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
  const m = points.length,
    n = points[0].length
  let dp = points[0].slice()
  for (let i = 1; i < m; i++) {
    const left = new Array(n)
    const right = new Array(n)
    left[0] = dp[0]
    for (let j = 1; j < n; j++) left[j] = Math.max(left[j - 1] - 1, dp[j])
    right[n - 1] = dp[n - 1]
    for (let j = n - 2; j >= 0; j--)
      right[j] = Math.max(right[j + 1] - 1, dp[j])
    const ndp = new Array(n)
    for (let j = 0; j < n; j++)
      ndp[j] = points[i][j] + Math.max(left[j], right[j])
    dp = ndp
  }
  return Math.max(...dp)
}
