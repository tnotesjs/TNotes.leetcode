/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function (grid) {
  const m = grid.length
  const n = grid[0].length

  // 对每一行进行排序
  for (let i = 0; i < m; i++) {
    grid[i].sort((a, b) => a - b)
  }

  let ans = 0

  // 按列遍历,找到每列的最大值累加
  for (let j = 0; j < n; j++) {
    let maxVal = 0
    for (let i = 0; i < m; i++) {
      maxVal = Math.max(maxVal, grid[i][j])
    }
    ans += maxVal
  }

  return ans
}
