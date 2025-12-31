/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {}

// 从右上角起步的线性扫描，O(m+n)
var countNegatives = function (grid) {
  const m = grid.length
  const n = grid[0].length

  let row = 0
  let col = n - 1
  let count = 0

  while (row < m && col >= 0) {
    if (grid[row][col] < 0) {
      // 当前列从 row 到底部都是负数
      count += m - row
      col--
    } else {
      row++
    }
  }

  return count
}
