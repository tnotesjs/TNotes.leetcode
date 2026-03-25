/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  const n = grid.length
  if (grid[0][0] || grid[n - 1][n - 1]) return -1
  const dirs = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ]
  const queue = [[0, 0]]
  grid[0][0] = 1
  let dist = 1
  while (queue.length) {
    const size = queue.length
    for (let q = 0; q < size; q++) {
      const [r, c] = queue.shift()
      if (r === n - 1 && c === n - 1) return dist
      for (const [dr, dc] of dirs) {
        const nr = r + dr,
          nc = c + dc
        if (nr >= 0 && nr < n && nc >= 0 && nc < n && grid[nr][nc] === 0) {
          grid[nr][nc] = 1
          queue.push([nr, nc])
        }
      }
    }
    dist++
  }
  return -1
}
