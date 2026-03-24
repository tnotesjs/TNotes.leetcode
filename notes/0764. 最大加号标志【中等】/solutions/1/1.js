/**
 * @param {number} n
 * @param {number[][]} mines
 * @return {number}
 */
var orderOfLargestPlusSign = function (n, mines) {
  const grid = Array.from({ length: n }, () => new Array(n).fill(1))
  for (const [r, c] of mines) grid[r][c] = 0
  const dp = Array.from({ length: n }, () => new Array(n).fill(0))
  let res = 0
  for (let i = 0; i < n; i++) {
    // left
    let cnt = 0
    for (let j = 0; j < n; j++) {
      cnt = grid[i][j] ? cnt + 1 : 0
      dp[i][j] = cnt
    }
    // right
    cnt = 0
    for (let j = n - 1; j >= 0; j--) {
      cnt = grid[i][j] ? cnt + 1 : 0
      dp[i][j] = Math.min(dp[i][j], cnt)
    }
  }
  for (let j = 0; j < n; j++) {
    // up
    let cnt = 0
    for (let i = 0; i < n; i++) {
      cnt = grid[i][j] ? cnt + 1 : 0
      dp[i][j] = Math.min(dp[i][j], cnt)
    }
    // down
    cnt = 0
    for (let i = n - 1; i >= 0; i--) {
      cnt = grid[i][j] ? cnt + 1 : 0
      dp[i][j] = Math.min(dp[i][j], cnt)
      res = Math.max(res, dp[i][j])
    }
  }
  return res
}
