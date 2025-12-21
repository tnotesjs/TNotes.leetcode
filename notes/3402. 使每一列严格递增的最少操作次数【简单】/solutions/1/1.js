/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumOperations = function (grid) {
  const m = grid.length
  const n = grid[0].length
  let ops = 0

  // 遍历每一列
  for (let j = 0; j < n; j++) {
    let prev = grid[0][j]
    // 从第二行开始遍历
    for (let i = 1; i < m; i++) {
      if (grid[i][j] <= prev) {
        // 需要增加到 prev + 1
        ops += prev + 1 - grid[i][j]
        prev = prev + 1
      } else {
        prev = grid[i][j]
      }
    }
  }

  return ops
}
