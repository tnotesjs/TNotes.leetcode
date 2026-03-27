/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxScore = function(grid) {
  const m = grid.length, n = grid[0].length
  // 移动得分 = grid[r2][c2] - grid[r1][c1]，可以分解为路径上相邻的差之和
  // 等价于找最大的 grid[i][j] - min(之前路径上经过的最小值)
  // dp[i][j] = 到达 (i,j) 时路径上的最小值
  let res = -Infinity
  const minVal = Array.from({length: m}, () => new Array(n).fill(Infinity))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i > 0) minVal[i][j] = Math.min(minVal[i][j], minVal[i-1][j])
      if (j > 0) minVal[i][j] = Math.min(minVal[i][j], minVal[i][j-1])
      if (i > 0 || j > 0) {
        res = Math.max(res, grid[i][j] - minVal[i][j])
      }
      minVal[i][j] = Math.min(minVal[i][j], grid[i][j])
    }
  }
  return res
}
