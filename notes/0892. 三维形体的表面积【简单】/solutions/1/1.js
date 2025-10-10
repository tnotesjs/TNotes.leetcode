/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function (grid) {
  const N = grid.length
  let area = 0

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (grid[i][j] > 0) {
        // 顶面和底面
        area += 2 // 每个柱子顶和底各1

        // 四个方向的侧面
        const directions = [
          [-1, 0],
          [1, 0],
          [0, -1],
          [0, 1],
        ]
        for (const [di, dj] of directions) {
          const ni = i + di
          const nj = j + dj
          let neighborHeight = 0
          if (ni >= 0 && ni < N && nj >= 0 && nj < N) {
            neighborHeight = grid[ni][nj]
          }
          // 当前柱子在该方向上暴露的高度 = 当前高度 - 与邻居重叠部分
          area += Math.max(grid[i][j] - neighborHeight, 0)
        }
      }
    }
  }

  return area
}
