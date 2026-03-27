/**
 * @param {number[][]} grid
 * @return {number}
 */
var minFlips = function(grid) {
  const m = grid.length, n = grid[0].length
  // 行回文的翻转次数
  let rowFlips = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < Math.floor(n / 2); j++) {
      if (grid[i][j] !== grid[i][n - 1 - j]) rowFlips++
    }
  }
  // 列回文的翻转次数
  let colFlips = 0
  for (let j = 0; j < n; j++) {
    for (let i = 0; i < Math.floor(m / 2); i++) {
      if (grid[i][j] !== grid[m - 1 - i][j]) colFlips++
    }
  }
  return Math.min(rowFlips, colFlips)
}
