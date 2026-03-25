/**
 * @param {number[][]} grid
 * @return {number}
 */
var matrixScore = function (grid) {
  const m = grid.length,
    n = grid[0].length
  for (let i = 0; i < m; i++) {
    if (grid[i][0] === 0) {
      for (let j = 0; j < n; j++) grid[i][j] ^= 1
    }
  }
  let res = 0
  for (let j = 0; j < n; j++) {
    let ones = 0
    for (let i = 0; i < m; i++) ones += grid[i][j]
    res += Math.max(ones, m - ones) * (1 << (n - 1 - j))
  }
  return res
}
