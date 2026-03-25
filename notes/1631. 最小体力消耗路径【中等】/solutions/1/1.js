/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function (heights) {
  const m = heights.length,
    n = heights[0].length
  const dist = Array.from({ length: m }, () => new Array(n).fill(Infinity))
  dist[0][0] = 0
  // 优先队列 [effort, row, col]
  const pq = [[0, 0, 0]]
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]
  while (pq.length) {
    // 简化的优先队列，每次取最小
    let minIdx = 0
    for (let i = 1; i < pq.length; i++) if (pq[i][0] < pq[minIdx][0]) minIdx = i
    const [effort, r, c] = pq[minIdx]
    pq[minIdx] = pq[pq.length - 1]
    pq.pop()
    if (effort > dist[r][c]) continue
    if (r === m - 1 && c === n - 1) return effort
    for (const [dr, dc] of dirs) {
      const nr = r + dr,
        nc = c + dc
      if (nr < 0 || nr >= m || nc < 0 || nc >= n) continue
      const newEffort = Math.max(
        effort,
        Math.abs(heights[nr][nc] - heights[r][c]),
      )
      if (newEffort < dist[nr][nc]) {
        dist[nr][nc] = newEffort
        pq.push([newEffort, nr, nc])
      }
    }
  }
  return 0
}
