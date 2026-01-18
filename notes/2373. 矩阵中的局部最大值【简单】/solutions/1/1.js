/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function (grid) {
  const n = grid.length
  const maxLocal = []

  // 遍历每个3x3子矩阵的中心位置
  for (let i = 0; i < n - 2; i++) {
    maxLocal[i] = []
    for (let j = 0; j < n - 2; j++) {
      // 找到以(i+1, j+1)为中心的3x3矩阵的最大值
      let max = 0
      for (let di = 0; di < 3; di++) {
        for (let dj = 0; dj < 3; dj++) {
          max = Math.max(max, grid[i + di][j + dj])
        }
      }
      maxLocal[i][j] = max
    }
  }

  return maxLocal
}
