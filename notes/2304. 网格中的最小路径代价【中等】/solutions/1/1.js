/**
 * @param {number[][]} grid
 * @param {number[][]} moveCost
 * @return {number}
 */
var minPathCost = function (grid, moveCost) {
  const m = grid.length,
    n = grid[0].length
  let dp = grid[0].slice()
  for (let i = 1; i < m; i++) {
    const ndp = new Array(n).fill(Infinity)
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        ndp[k] = Math.min(
          ndp[k],
          dp[j] + moveCost[grid[i - 1][j]][k] + grid[i][k],
        )
      }
    }
    dp = ndp
  }
  return Math.min(...dp)
}
