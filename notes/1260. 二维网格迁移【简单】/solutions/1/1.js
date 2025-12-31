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
      const idx = r * n + c
      const newIdx = (idx + k) % len
      const nr = Math.floor(newIdx / n)
      const nc = newIdx % n
      res[nr][nc] = grid[r][c]
    }
  }

  return res
}
