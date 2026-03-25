/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function (grid) {
  const m = grid.length,
    n = grid[0].length
  const rowCnt = new Array(m).fill(0)
  const colCnt = new Array(n).fill(0)
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        rowCnt[i]++
        colCnt[j]++
      }
    }
  }
  let ans = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1 && (rowCnt[i] > 1 || colCnt[j] > 1)) {
        ans++
      }
    }
  }
  return ans
}
