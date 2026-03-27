/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumOperations = function(grid) {
  const m = grid.length, n = grid[0].length
  // 统计每列每个值 (0-9) 的出现次数
  const colCount = Array.from({length: n}, () => new Array(10).fill(0))
  for (let j = 0; j < n; j++) {
    for (let i = 0; i < m; i++) {
      colCount[j][grid[i][j]]++
    }
  }
  // DP: dp[j][v] = 前 j 列，第 j 列全部变成 v 的最小操作次数
  let prev = new Array(10).fill(0)
  for (let v = 0; v < 10; v++) {
    prev[v] = m - colCount[0][v]
  }
  for (let j = 1; j < n; j++) {
    const curr = new Array(10).fill(Infinity)
    for (let v = 0; v < 10; v++) {
      const cost = m - colCount[j][v]
      for (let pv = 0; pv < 10; pv++) {
        if (pv !== v) {
          curr[v] = Math.min(curr[v], prev[pv] + cost)
        }
      }
    }
    prev = curr
  }
  return Math.min(...prev)
}
