/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findColumnWidth = function (grid) {
  const m = grid.length
  const n = grid[0].length
  const ans = new Array(n).fill(0)

  // 遍历每一列
  for (let j = 0; j < n; j++) {
    let maxLen = 0
    // 遍历该列的每一个元素
    for (let i = 0; i < m; i++) {
      const strLen = String(grid[i][j]).length
      maxLen = Math.max(maxLen, strLen)
    }
    ans[j] = maxLen
  }

  return ans
}
