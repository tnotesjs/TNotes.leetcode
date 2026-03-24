/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability = function (n, k, row, column) {
  const dirs = [
    [-2, -1],
    [-2, 1],
    [-1, -2],
    [-1, 2],
    [1, -2],
    [1, 2],
    [2, -1],
    [2, 1],
  ]
  let dp = Array.from({ length: n }, () => new Array(n).fill(0))
  dp[row][column] = 1
  for (let step = 0; step < k; step++) {
    const next = Array.from({ length: n }, () => new Array(n).fill(0))
    for (let r = 0; r < n; r++) {
      for (let c = 0; c < n; c++) {
        if (dp[r][c] === 0) continue
        for (const [dr, dc] of dirs) {
          const nr = r + dr,
            nc = c + dc
          if (nr >= 0 && nr < n && nc >= 0 && nc < n) {
            next[nr][nc] += dp[r][c] / 8
          }
        }
      }
    }
    dp = next
  }
  let res = 0
  for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) res += dp[r][c]
  return res
}
