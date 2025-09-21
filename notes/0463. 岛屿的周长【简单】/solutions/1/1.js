/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  if (!grid || grid.length === 0 || grid[0].length === 0) {
    return 0
  }

  const rows = grid.length
  const cols = grid[0].length
  let perimeter = 0

  // 遍历每个格子
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // 如果当前格子是陆地，依次检查四个方向，判断每条边是否需要计入周长。
      if (grid[i][j] === 1) {
        // 上方向
        if (i === 0 || grid[i - 1][j] === 0) {
          perimeter++
        }
        // 下方向
        if (i === rows - 1 || grid[i + 1][j] === 0) {
          perimeter++
        }
        // 左方向
        if (j === 0 || grid[i][j - 1] === 0) {
          perimeter++
        }
        // 右方向
        if (j === cols - 1 || grid[i][j + 1] === 0) {
          perimeter++
        }
      }
    }
  }

  return perimeter
}
