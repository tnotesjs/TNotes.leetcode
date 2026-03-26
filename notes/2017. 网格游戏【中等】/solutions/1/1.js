/**
 * @param {number[][]} grid
 * @return {number}
 */
var gridGame = function (grid) {
  const n = grid[0].length
  let topSum = 0
  for (let i = 0; i < n; i++) topSum += grid[0][i]
  let bottomSum = 0,
    ans = Infinity
  for (let j = 0; j < n; j++) {
    topSum -= grid[0][j]
    ans = Math.min(ans, Math.max(topSum, bottomSum))
    bottomSum += grid[1][j]
  }
  return ans
}
