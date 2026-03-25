/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function (grid) {
  const n = grid.length
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]
  const queue = []
  let found = false

  // DFS 标记第一个岛为 2
  const dfs = (i, j) => {
    grid[i][j] = 2
    queue.push([i, j])
    for (const [di, dj] of dirs) {
      const ni = i + di,
        nj = j + dj
      if (ni >= 0 && ni < n && nj >= 0 && nj < n && grid[ni][nj] === 1) {
        dfs(ni, nj)
      }
    }
  }

  for (let i = 0; i < n && !found; i++) {
    for (let j = 0; j < n && !found; j++) {
      if (grid[i][j] === 1) {
        dfs(i, j)
        found = true
      }
    }
  }

  // BFS 找第二个岛
  let step = 0
  while (queue.length) {
    const size = queue.length
    for (let s = 0; s < size; s++) {
      const [x, y] = queue.shift()
      for (const [di, dj] of dirs) {
        const nx = x + di,
          ny = y + dj
        if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
          if (grid[nx][ny] === 1) return step
          if (grid[nx][ny] === 0) {
            grid[nx][ny] = 2
            queue.push([nx, ny])
          }
        }
      }
    }
    step++
  }

  return -1
}
