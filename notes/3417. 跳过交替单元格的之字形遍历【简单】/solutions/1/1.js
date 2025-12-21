/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var zigzagTraversal = function (grid) {
  const m = grid.length
  const n = grid[0].length
  const result = []
  let skip = false // 是否跳过当前单元格

  for (let i = 0; i < m; i++) {
    if (i % 2 === 0) {
      // 偶数行：从左到右
      for (let j = 0; j < n; j++) {
        if (!skip) result.push(grid[i][j])
        skip = !skip
      }
    } else {
      // 奇数行：从右到左
      for (let j = n - 1; j >= 0; j--) {
        if (!skip) result.push(grid[i][j])
        skip = !skip
      }
    }
  }

  return result
}
