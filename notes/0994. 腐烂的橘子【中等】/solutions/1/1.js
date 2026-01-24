/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const m = grid.length
  const n = grid[0].length
  const queue = []
  let fresh = 0 // 新鲜橘子数量

  // 统计新鲜橘子数量，将所有腐烂橘子加入队列
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        fresh++
      } else if (grid[i][j] === 2) {
        queue.push([i, j])
      }
    }
  }

  // 如果没有新鲜橘子，直接返回 0
  if (fresh === 0) return 0

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]
  let minutes = 0

  // BFS 多源扩散
  while (queue.length > 0) {
    const size = queue.length
    let hasRotten = false

    for (let i = 0; i < size; i++) {
      const [x, y] = queue.shift()

      for (const [dx, dy] of directions) {
        const nx = x + dx
        const ny = y + dy

        // 检查边界和是否为新鲜橘子
        if (nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] === 1) {
          grid[nx][ny] = 2 // 腐烂
          queue.push([nx, ny])
          fresh--
          hasRotten = true
        }
      }
    }

    if (hasRotten) minutes++
  }

  return fresh === 0 ? minutes : -1
}
