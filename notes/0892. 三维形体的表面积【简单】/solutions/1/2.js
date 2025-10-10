/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function (grid) {
  const N = grid.length
  let totalArea = 0

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      // 每个立方体贡献6个面
      totalArea += grid[i][j] * 6

      // 减去垂直堆叠造成的遮挡
      // 每个堆叠点遮挡2个面（上下两个面）
      if (grid[i][j] > 0) {
        totalArea -= (grid[i][j] - 1) * 2
      }

      // 减去与相邻立方体之间的遮挡
      // 上方向邻居
      if (i > 0) {
        totalArea -= Math.min(grid[i][j], grid[i - 1][j]) * 2
      }

      // 左方向邻居
      if (j > 0) {
        totalArea -= Math.min(grid[i][j], grid[i][j - 1]) * 2
      }
    }
  }

  return totalArea
}
