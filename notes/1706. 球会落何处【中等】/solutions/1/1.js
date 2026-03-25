/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function (grid) {
  const m = grid.length,
    n = grid[0].length
  const res = new Array(n)
  for (let j = 0; j < n; j++) {
    let col = j
    for (let i = 0; i < m; i++) {
      const d = grid[i][col]
      const next = col + d
      if (next < 0 || next >= n || grid[i][next] !== d) {
        col = -1
        break
      }
      col = next
    }
    res[j] = col
  }
  return res
}
