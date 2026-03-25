/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function (grid) {
  const m = grid.length,
    n = grid[0].length
  let ans = 0
  function dfs(i, j, sum) {
    if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === 0) {
      ans = Math.max(ans, sum)
      return
    }
    const val = grid[i][j]
    grid[i][j] = 0
    dfs(i + 1, j, sum + val)
    dfs(i - 1, j, sum + val)
    dfs(i, j + 1, sum + val)
    dfs(i, j - 1, sum + val)
    grid[i][j] = val
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] > 0) dfs(i, j, 0)
    }
  }
  return ans
}
