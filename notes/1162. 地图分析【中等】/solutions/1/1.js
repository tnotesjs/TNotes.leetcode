/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function (grid) {
  const n = grid.length
  const queue = []
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) queue.push([i, j])
    }
  }
  if (queue.length === 0 || queue.length === n * n) return -1
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]
  let dist = -1,
    head = 0
  while (head < queue.length) {
    const size = queue.length - head
    for (let s = 0; s < size; s++) {
      const [x, y] = queue[head++]
      for (const [dx, dy] of dirs) {
        const nx = x + dx,
          ny = y + dy
        if (nx >= 0 && nx < n && ny >= 0 && ny < n && grid[nx][ny] === 0) {
          grid[nx][ny] = 1
          queue.push([nx, ny])
        }
      }
    }
    dist++
  }
  return dist
}
