/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function (grid) {
  const m = grid.length, n = grid[0].length
  const rowOnes = new Array(m).fill(0)
  const colOnes = new Array(n).fill(0)
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      rowOnes[i] += grid[i][j]
      colOnes[j] += grid[i][j]
    }
  }
  const diff = Array.from({ length: m }, () => new Array(n))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      diff[i][j] = 2 * rowOnes[i] + 2 * colOnes[j] - m - n
    }
  }
  return diff
}
