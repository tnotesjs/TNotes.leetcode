/**
 * @param {number[][]} grid
 * @return {number}
 */
var largest1BorderedSquare = function (grid) {
  const m = grid.length,
    n = grid[0].length
  // hor[i][j] = 从 (i,j) 向左连续 1 的个数
  // ver[i][j] = 从 (i,j) 向上连续 1 的个数
  const hor = Array.from({ length: m }, () => new Array(n).fill(0))
  const ver = Array.from({ length: m }, () => new Array(n).fill(0))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j]) {
        hor[i][j] = (j > 0 ? hor[i][j - 1] : 0) + 1
        ver[i][j] = (i > 0 ? ver[i - 1][j] : 0) + 1
      }
    }
  }
  let res = 0
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      let side = Math.min(hor[i][j], ver[i][j])
      while (side > res) {
        if (ver[i][j - side + 1] >= side && hor[i - side + 1][j] >= side) {
          res = side
          break
        }
        side--
      }
    }
  }
  return res * res
}
