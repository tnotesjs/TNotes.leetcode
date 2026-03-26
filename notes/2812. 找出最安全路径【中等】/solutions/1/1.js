/**
 * @param {number[][]} grid
 * @return {number}
 */
var maximumSafenessFactor = function (grid) {
  const n = grid.length
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]
  // 多源 BFS 计算每个格子到最近小偷的距离
  const dist = Array.from({ length: n }, () => new Int32Array(n).fill(-1))
  const queue = []
  for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++)
      if (grid[i][j] === 1) {
        dist[i][j] = 0
        queue.push([i, j])
      }
  let head = 0
  while (head < queue.length) {
    const [r, c] = queue[head++]
    for (const [dr, dc] of dirs) {
      const nr = r + dr,
        nc = c + dc
      if (nr >= 0 && nr < n && nc >= 0 && nc < n && dist[nr][nc] === -1) {
        dist[nr][nc] = dist[r][c] + 1
        queue.push([nr, nc])
      }
    }
  }
  // 二分答案 + BFS 验证
  const check = (k) => {
    if (dist[0][0] < k || dist[n - 1][n - 1] < k) return false
    const vis = Array.from({ length: n }, () => new Uint8Array(n))
    vis[0][0] = 1
    const q = [[0, 0]]
    let h = 0
    while (h < q.length) {
      const [r, c] = q[h++]
      if (r === n - 1 && c === n - 1) return true
      for (const [dr, dc] of dirs) {
        const nr = r + dr,
          nc = c + dc
        if (
          nr >= 0 &&
          nr < n &&
          nc >= 0 &&
          nc < n &&
          !vis[nr][nc] &&
          dist[nr][nc] >= k
        ) {
          vis[nr][nc] = 1
          q.push([nr, nc])
        }
      }
    }
    return false
  }
  let lo = 0,
    hi = n * 2
  while (lo < hi) {
    const mid = (lo + hi + 1) >> 1
    if (check(mid)) lo = mid
    else hi = mid - 1
  }
  return lo
}
