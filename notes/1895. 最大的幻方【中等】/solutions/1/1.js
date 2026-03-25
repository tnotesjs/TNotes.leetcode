/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestMagicSquare = function (grid) {
  const m = grid.length,
    n = grid[0].length
  // 前缀和
  const rowSum = Array.from({ length: m }, () => new Array(n + 1).fill(0))
  const colSum = Array.from({ length: m + 1 }, () => new Array(n).fill(0))
  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++) {
      rowSum[i][j + 1] = rowSum[i][j] + grid[i][j]
      colSum[i + 1][j] = colSum[i][j] + grid[i][j]
    }
  const getRow = (r, c1, c2) => rowSum[r][c2 + 1] - rowSum[r][c1]
  const getCol = (c, r1, r2) => colSum[r2 + 1][c] - colSum[r1][c]

  for (let k = Math.min(m, n); k >= 2; k--) {
    for (let i = 0; i + k <= m; i++) {
      for (let j = 0; j + k <= n; j++) {
        const target = getRow(i, j, j + k - 1)
        let ok = true
        for (let r = i + 1; r < i + k && ok; r++)
          if (getRow(r, j, j + k - 1) !== target) ok = false
        for (let c = j; c < j + k && ok; c++)
          if (getCol(c, i, i + k - 1) !== target) ok = false
        if (ok) {
          let d1 = 0,
            d2 = 0
          for (let d = 0; d < k; d++) {
            d1 += grid[i + d][j + d]
            d2 += grid[i + d][j + k - 1 - d]
          }
          if (d1 === target && d2 === target) return k
        }
      }
    }
  }
  return 1
}
