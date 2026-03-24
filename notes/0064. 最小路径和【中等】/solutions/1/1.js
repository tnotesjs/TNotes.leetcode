/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const m = grid.length,
    n = grid[0].length
  const dp = new Array(n)
  dp[0] = grid[0][0]
  for (let j = 1; j < n; j++) dp[j] = dp[j - 1] + grid[0][j] // 第一行前缀和

  for (let i = 1; i < m; i++) {
    dp[0] += grid[i][0] // 第一列累加
    for (let j = 1; j < n; j++) dp[j] = Math.min(dp[j], dp[j - 1]) + grid[i][j]
  }
  return dp[n - 1]
}
