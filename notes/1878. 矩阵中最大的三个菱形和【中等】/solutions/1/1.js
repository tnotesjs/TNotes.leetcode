/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var getBiggestThree = function (grid) {
  const m = grid.length,
    n = grid[0].length
  const set = new Set()
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      set.add(grid[i][j]) // size=0 的菱形
      for (let k = 1; k <= Math.min(i, m - 1 - i, j, n - 1 - j); k++) {
        let sum = 0
        // 上半部分
        for (let d = 0; d < k; d++) {
          sum += grid[i - k + d][j - d] + grid[i - k + d][j + d]
        }
        // 下半部分
        for (let d = 0; d < k; d++) {
          sum += grid[i + k - d][j - d] + grid[i + k - d][j + d]
        }
        // 上顶点和下顶点被计算了两次，减去
        sum -= grid[i - k][j] + grid[i + k][j]
        set.add(sum)
      }
    }
  }
  return [...set].sort((a, b) => b - a).slice(0, 3)
}
