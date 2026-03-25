/**
 * @param {number[][]} isWater
 * @return {number[][]}
 */
var highestPeak = function (isWater) {
  const m = isWater.length,
    n = isWater[0].length
  const height = Array.from({ length: m }, () => new Array(n).fill(-1))
  const queue = []
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (isWater[i][j] === 1) {
        height[i][j] = 0
        queue.push([i, j])
      }
    }
  }
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]
  let head = 0
  while (head < queue.length) {
    const [x, y] = queue[head++]
    for (const [dx, dy] of dirs) {
      const nx = x + dx,
        ny = y + dy
      if (nx >= 0 && nx < m && ny >= 0 && ny < n && height[nx][ny] === -1) {
        height[nx][ny] = height[x][y] + 1
        queue.push([nx, ny])
      }
    }
  }
  return height
}
