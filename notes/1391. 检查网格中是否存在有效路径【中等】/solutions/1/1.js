/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var hasValidPath = function (grid) {
  const m = grid.length,
    n = grid[0].length
  // 每种街道的连接方向：左0、右1、上2、下3
  const dirs = {
    1: [0, 1],
    2: [2, 3],
    3: [0, 3],
    4: [1, 3],
    5: [0, 2],
    6: [1, 2],
  }
  // 方向对应的偏移和反方向
  const move = [
    [0, -1, 1],
    [0, 1, 0],
    [-1, 0, 3],
    [1, 0, 2],
  ] // [dr, dc, opposite]

  const visited = Array.from({ length: m }, () => new Uint8Array(n))
  const queue = [[0, 0]]
  visited[0][0] = 1

  while (queue.length) {
    const [r, c] = queue.shift()
    if (r === m - 1 && c === n - 1) return true
    for (const d of dirs[grid[r][c]]) {
      const [dr, dc, opp] = move[d]
      const nr = r + dr,
        nc = c + dc
      if (nr < 0 || nr >= m || nc < 0 || nc >= n) continue
      if (visited[nr][nc]) continue
      if (!dirs[grid[nr][nc]].includes(opp)) continue
      visited[nr][nc] = 1
      queue.push([nr, nc])
    }
  }
  return false
}
