/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxProductPath = function (grid) {
  const MOD = 1e9 + 7
  const m = grid.length,
    n = grid[0].length
  // dpMax[i][j], dpMin[i][j]: 到 (i,j) 的最大/最小乘积
  const dpMax = Array.from({ length: m }, () => new Array(n))
  const dpMin = Array.from({ length: m }, () => new Array(n))
  dpMax[0][0] = dpMin[0][0] = grid[0][0]
  for (let i = 1; i < m; i++) {
    dpMax[i][0] = dpMin[i][0] = dpMax[i - 1][0] * grid[i][0]
  }
  for (let j = 1; j < n; j++) {
    dpMax[0][j] = dpMin[0][j] = dpMax[0][j - 1] * grid[0][j]
  }
  for (let i = 1; i < m; i++)
    for (let j = 1; j < n; j++) {
      const v = grid[i][j]
      const a = dpMax[i - 1][j] * v,
        b = dpMin[i - 1][j] * v
      const c = dpMax[i][j - 1] * v,
        d = dpMin[i][j - 1] * v
      dpMax[i][j] = Math.max(a, b, c, d)
      dpMin[i][j] = Math.min(a, b, c, d)
    }
  return dpMax[m - 1][n - 1] < 0 ? -1 : dpMax[m - 1][n - 1] % MOD
}
