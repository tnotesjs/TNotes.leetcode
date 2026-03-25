/**
 * @param {number[][]} grid
 * @param {number} row
 * @param {number} col
 * @param {number} color
 * @return {number[][]}
 */
var colorBorder = function (grid, row, col, color) {
  const m = grid.length
  const n = grid[0].length
  const original = grid[row][col]
  const visited = Array.from({ length: m }, () => new Array(n).fill(false))
  const borders = []
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]

  const dfs = (i, j) => {
    visited[i][j] = true
    let isBorder = false
    for (const [di, dj] of dirs) {
      const ni = i + di
      const nj = j + dj
      if (ni < 0 || ni >= m || nj < 0 || nj >= n || grid[ni][nj] !== original) {
        isBorder = true
      } else if (!visited[ni][nj]) {
        dfs(ni, nj)
      }
    }
    if (isBorder) borders.push([i, j])
  }

  dfs(row, col)
  for (const [i, j] of borders) grid[i][j] = color
  return grid
}
