/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var rotateGrid = function (grid, k) {
  const m = grid.length,
    n = grid[0].length
  const layers = Math.min(m, n) >> 1
  for (let layer = 0; layer < layers; layer++) {
    const r1 = layer,
      c1 = layer,
      r2 = m - 1 - layer,
      c2 = n - 1 - layer
    const ring = []
    for (let c = c1; c < c2; c++) ring.push(grid[r1][c])
    for (let r = r1; r < r2; r++) ring.push(grid[r][c2])
    for (let c = c2; c > c1; c--) ring.push(grid[r2][c])
    for (let r = r2; r > r1; r--) ring.push(grid[r][c1])
    const len = ring.length
    const shift = k % len
    let idx = shift
    for (let c = c1; c < c2; c++) {
      grid[r1][c] = ring[idx % len]
      idx++
    }
    for (let r = r1; r < r2; r++) {
      grid[r][c2] = ring[idx % len]
      idx++
    }
    for (let c = c2; c > c1; c--) {
      grid[r2][c] = ring[idx % len]
      idx++
    }
    for (let r = r2; r > r1; r--) {
      grid[r][c1] = ring[idx % len]
      idx++
    }
  }
  return grid
}
