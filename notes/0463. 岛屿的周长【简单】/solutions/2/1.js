/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let landCount = 0 // 陆地格子总数
  let adjacentCount = 0 // 相邻的陆地边数

  // 遍历网格统计陆地格子数和相邻边数
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        landCount++

        // 检查下方是否有陆地
        if (i + 1 < grid.length && grid[i + 1][j] === 1) {
          adjacentCount++
        }

        // 检查右方是否有陆地
        if (j + 1 < grid[0].length && grid[i][j + 1] === 1) {
          adjacentCount++
        }
      }
    }
  }

  // 每个陆地格子贡献4条边，每条相邻边被两个格子共享，所以要减去2倍的相邻边数
  return landCount * 4 - adjacentCount * 2
}
