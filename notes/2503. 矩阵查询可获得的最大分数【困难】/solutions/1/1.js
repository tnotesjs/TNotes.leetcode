/**
 * @param {number[][]} grid
 * @param {number[]} queries
 * @return {number[]}
 */
var maxPoints = function (grid, queries) {
  const m = grid.length,
    n = grid[0].length
  const k = queries.length
  const idx = Array.from({ length: k }, (_, i) => i)
  idx.sort((a, b) => queries[a] - queries[b])

  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]
  const heap = []
  const swap = (i, j) => {
    ;[heap[i], heap[j]] = [heap[j], heap[i]]
  }
  const push = (val) => {
    heap.push(val)
    let i = heap.length - 1
    while (i > 0) {
      const p = (i - 1) >> 1
      if (heap[p][0] <= heap[i][0]) break
      swap(i, p)
      i = p
    }
  }
  const pop = () => {
    const top = heap[0],
      last = heap.pop()
    if (heap.length > 0) {
      heap[0] = last
      let i = 0
      while (true) {
        let s = i,
          l = 2 * i + 1,
          r = 2 * i + 2
        if (l < heap.length && heap[l][0] < heap[s][0]) s = l
        if (r < heap.length && heap[r][0] < heap[s][0]) s = r
        if (s === i) break
        swap(i, s)
        i = s
      }
    }
    return top
  }

  push([grid[0][0], 0, 0])
  const visited = Array.from({ length: m }, () => new Uint8Array(n))
  visited[0][0] = 1
  let count = 0
  const ans = new Array(k)

  for (const qi of idx) {
    const q = queries[qi]
    while (heap.length > 0 && heap[0][0] < q) {
      const [, r, c] = pop()
      count++
      for (const [dr, dc] of dirs) {
        const nr = r + dr,
          nc = c + dc
        if (nr >= 0 && nr < m && nc >= 0 && nc < n && !visited[nr][nc]) {
          visited[nr][nc] = 1
          push([grid[nr][nc], nr, nc])
        }
      }
    }
    ans[qi] = count
  }
  return ans
}
