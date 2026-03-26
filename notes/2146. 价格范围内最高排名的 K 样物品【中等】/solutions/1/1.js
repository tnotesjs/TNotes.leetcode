/**
 * @param {number[][]} grid
 * @param {number[]} pricing
 * @param {number[]} start
 * @param {number} k
 * @return {number[][]}
 */
var highestRankedKItems = function (grid, pricing, start, k) {
  const m = grid.length,
    n = grid[0].length
  const [low, high] = pricing
  const [sr, sc] = start
  const res = []
  const visited = Array.from({ length: m }, () => new Array(n).fill(false))
  const queue = [[sr, sc, 0]]
  visited[sr][sc] = true
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]
  // BFS 按层处理
  let items = [] // [dist, price, row, col]
  while (queue.length > 0) {
    const size = queue.length
    const layer = []
    for (let q = 0; q < size; q++) {
      const [r, c, d] = queue.shift()
      const price = grid[r][c]
      if (price >= low && price <= high) {
        layer.push([d, price, r, c])
      }
      for (const [dr, dc] of dirs) {
        const nr = r + dr,
          nc = c + dc
        if (
          nr >= 0 &&
          nr < m &&
          nc >= 0 &&
          nc < n &&
          !visited[nr][nc] &&
          grid[nr][nc] !== 0
        ) {
          visited[nr][nc] = true
          queue.push([nr, nc, d + 1])
        }
      }
    }
    layer.sort(
      (a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2] || a[3] - b[3],
    )
    for (const item of layer) {
      res.push([item[2], item[3]])
      if (res.length === k) return res
    }
  }
  return res
}
