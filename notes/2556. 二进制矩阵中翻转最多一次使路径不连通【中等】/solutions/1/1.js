/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var isPossibleToCutPath = function (grid) {
  const m = grid.length, n = grid[0].length
  // 第一次 DFS：找到一条路径并标记
  const dfs = (i, j) => {
    if (i === m - 1 && j === n - 1) return true
    grid[i][j] = 0
    if (i + 1 < m && grid[i + 1][j] === 1 && dfs(i + 1, j)) return true
    if (j + 1 < n && grid[i][j + 1] === 1 && dfs(i, j + 1)) return true
    return false
  }
  if (!dfs(0, 0)) return true
  grid[0][0] = 1
  grid[m - 1][n - 1] = 1
  // 第二次 DFS：检查是否还有路径
  return !dfs(0, 0)
}
