/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxSum = function (grid) {
  const m = grid.length, n = grid[0].length
  let ans = -Infinity
  for (let i = 0; i < m - 2; i++) {
    for (let j = 0; j < n - 2; j++) {
      const sum = grid[i][j] + grid[i][j + 1] + grid[i][j + 2]
        + grid[i + 1][j + 1]
        + grid[i + 2][j] + grid[i + 2][j + 1] + grid[i + 2][j + 2]
      ans = Math.max(ans, sum)
    }
  }
  return ans
}
