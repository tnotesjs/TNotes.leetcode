/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var satisfiesConditions = function (grid) {
  const m = grid.length
  const n = grid[0].length

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 检查下面的格子：需要相等
      if (i + 1 < m && grid[i][j] !== grid[i + 1][j]) {
        return false
      }
      // 检查右边的格子：需要不等
      if (j + 1 < n && grid[i][j] === grid[i][j + 1]) {
        return false
      }
    }
  }

  return true
}
