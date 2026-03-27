/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var countSubmatrices = function(grid, k) {
  const m = grid.length, n = grid[0].length
  // 计算前缀和
  const pre = Array.from({length: m + 1}, () => new Array(n + 1).fill(0))
  let count = 0
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      pre[i][j] = pre[i-1][j] + pre[i][j-1] - pre[i-1][j-1] + grid[i-1][j-1]
      if (pre[i][j] <= k) count++
    }
  }
  return count
}
