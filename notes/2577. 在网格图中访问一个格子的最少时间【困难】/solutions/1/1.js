/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumTime = function (grid) {
  const m = grid.length, n = grid[0].length
  if (grid[0][1] > 1 && grid[1][0] > 1) return -1
  const dist = Array.from({ length: m }, () => new Array(n).fill(Infinity))
  dist[0][0] = 0
  const heap = [[0, 0, 0]]
  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]]

  const push = (v) => {
    heap.push(v)
    let i = heap.length - 1
    while (i > 0) {
      const p = (i - 1) >> 1
      if (heap[p][0] <= heap[i][0]) break
      ;[heap[p], heap[i]] = [heap[i], heap[p]]
      i = p
    }
  }
  const pop = () => {
    const top = heap[0]
    const last = heap.pop()
    if (heap.length > 0) {
      heap[0] = last
      let i = 0
      while (true) {
        let s = i, l = 2 * i + 1, r = 2 * i + 2
        if (l < heap.length && heap[l][0] < heap[s][0]) s = l
        if (r < heap.length && heap[r][0] < heap[s][0]) s = r
        if (s === i) break
        ;[heap[s], heap[i]] = [heap[i], heap[s]]
        i = s
      }
    }
    return top
  }

  while (heap.length) {
    const [t, r, c] = pop()
    if (r === m - 1 && c === n - 1) return t
    if (t > dist[r][c]) continue
    for (const [dr, dc] of dirs) {
      const nr = r + dr, nc = c + dc
      if (nr < 0 || nr >= m || nc < 0 || nc >= n) continue
      let w = Math.max(t + 1, grid[nr][nc])
      if ((w - t) % 2 === 0) w++
      if (w < dist[nr][nc]) {
        dist[nr][nc] = w
        push([w, nr, nc])
      }
    }
  }
  return -1
}
