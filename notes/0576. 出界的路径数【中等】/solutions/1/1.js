/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
var findPaths = function (m, n, maxMove, startRow, startColumn) {
  const MOD = 1e9 + 7
  let dp = Array.from({ length: m }, () => new Array(n).fill(0))
  dp[startRow][startColumn] = 1
  let res = 0
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ]
  for (let k = 0; k < maxMove; k++) {
    const ndp = Array.from({ length: m }, () => new Array(n).fill(0))
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (dp[i][j] === 0) continue
        for (const [di, dj] of dirs) {
          const ni = i + di,
            nj = j + dj
          if (ni < 0 || ni >= m || nj < 0 || nj >= n) {
            res = (res + dp[i][j]) % MOD
          } else {
            ndp[ni][nj] = (ndp[ni][nj] + dp[i][j]) % MOD
          }
        }
      }
    }
    dp = ndp
  }
  return res
}
