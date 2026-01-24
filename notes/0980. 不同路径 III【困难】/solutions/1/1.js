/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function (grid) {
  const m = grid.length
  const n = grid[0].length
  let startX = 0,
    startY = 0,
    emptyCount = 0

  // 统计空方格数量并找到起点
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) {
        emptyCount++
      } else if (grid[i][j] === 1) {
        startX = i
        startY = j
      }
    }
  }

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]
  let count = 0

  const dfs = (x, y, remaining) => {
    // 到达终点
    if (grid[x][y] === 2) {
      // 检查是否经过了所有空方格
      if (remaining === 0) {
        count++
      }
      return
    }

    // 标记当前位置为已访问
    const temp = grid[x][y]
    grid[x][y] = -1

    // 尝试四个方向
    for (const [dx, dy] of directions) {
      const nx = x + dx
      const ny = y + dy

      // 检查边界和是否可访问
      if (nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] !== -1) {
        // 如果是空方格，减少剩余计数
        const nextRemaining = grid[nx][ny] === 0 ? remaining - 1 : remaining
        dfs(nx, ny, nextRemaining)
      }
    }

    // 回溯：恢复当前位置
    grid[x][y] = temp
  }

  dfs(startX, startY, emptyCount)
  return count
}
