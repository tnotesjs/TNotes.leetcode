/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
  const m = grid.length
  const n = grid[0].length
  const len = m * n
  const res = Array.from({ length: m }, () => new Array(n))

  for (let r = 0; r < m; r += 1) {
    for (let c = 0; c < n; c += 1) {
      // 计算当前位置在一维数组中的索引
      const idx = r * n + c

      // 计算迁移 k 次后在一维数组中的新索引
      const newIdx = (idx + k) % len

      // 映射回二维数组的行列索引
      const nr = Math.floor(newIdx / n)
      const nc = newIdx % n
      res[nr][nc] = grid[r][c]
    }
  }

  return res
}
