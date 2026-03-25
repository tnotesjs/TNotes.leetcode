/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function (grid) {
  const m = grid.length,
    n = grid[0].length
  const dfs = (i, j) => {
    if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === 1) return
    grid[i][j] = 1
    dfs(i + 1, j)
    dfs(i - 1, j)
    dfs(i, j + 1)
    dfs(i, j - 1)
  }
  // 先淡化边界上的岛屿
  for (let i = 0; i < m; i++) {
    dfs(i, 0)
    dfs(i, n - 1)
  }
  for (let j = 0; j < n; j++) {
    dfs(0, j)
    dfs(m - 1, j)
  }
  // 统计剩余封闭岛屿
  let ans = 0
  for (let i = 1; i < m - 1; i++) {
    for (let j = 1; j < n - 1; j++) {
      if (grid[i][j] === 0) {
        dfs(i, j)
        ans++
      }
    }
  }
  return ans
}
