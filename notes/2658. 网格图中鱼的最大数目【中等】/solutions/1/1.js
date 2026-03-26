/**
 * @param {number[][]} grid
 * @return {number}
 */
var findMaxFish = function (grid) {
  const m = grid.length,
    n = grid[0].length
  let ans = 0

  function dfs(r, c) {
    if (r < 0 || r >= m || c < 0 || c >= n || grid[r][c] === 0) return 0
    let fish = grid[r][c]
    grid[r][c] = 0
    fish += dfs(r + 1, c)
    fish += dfs(r - 1, c)
    fish += dfs(r, c + 1)
    fish += dfs(r, c - 1)
    return fish
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] > 0) {
        ans = Math.max(ans, dfs(i, j))
      }
    }
  }
  return ans
}
