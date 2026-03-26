/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkValidGrid = function (grid) {
  if (grid[0][0] !== 0) return false
  const n = grid.length
  const pos = new Array(n * n)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      pos[grid[i][j]] = [i, j]
    }
  }
  for (let k = 1; k < n * n; k++) {
    const dx = Math.abs(pos[k][0] - pos[k - 1][0])
    const dy = Math.abs(pos[k][1] - pos[k - 1][1])
    if (!((dx === 1 && dy === 2) || (dx === 2 && dy === 1))) return false
  }
  return true
}
