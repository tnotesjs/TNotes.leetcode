/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumArea = function(grid) {
  const m = grid.length, n = grid[0].length
  let minR = m, maxR = -1, minC = n, maxC = -1
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        minR = Math.min(minR, i)
        maxR = Math.max(maxR, i)
        minC = Math.min(minC, j)
        maxC = Math.max(maxC, j)
      }
    }
  }
  return (maxR - minR + 1) * (maxC - minC + 1)
}
