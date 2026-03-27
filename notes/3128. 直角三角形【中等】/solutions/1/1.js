/**
 * @param {number[][]} grid
 * @return {number}
 */
var numberOfRightTriangles = function(grid) {
  const m = grid.length, n = grid[0].length
  const rowCount = new Array(m).fill(0)
  const colCount = new Array(n).fill(0)
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        rowCount[i]++
        colCount[j]++
      }
    }
  }
  let count = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        // 以 (i,j) 为直角顶点
        count += (rowCount[i] - 1) * (colCount[j] - 1)
      }
    }
  }
  return count
}
