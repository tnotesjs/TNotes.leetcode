/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumVisitedCells = function (grid) {
  const m = grid.length,
    n = grid[0].length
  const dist = Array.from({ length: m }, () => new Array(n).fill(-1))
  dist[0][0] = 1
  // 每行和每列维护一个小根堆
  // 行堆: [dist, col]，列堆: [dist, row]
  const rowHeaps = Array.from({ length: m }, () => [])
  const colHeaps = Array.from({ length: n }, () => [])

  const push = (heap, val) => {
    heap.push(val)
    let i = heap.length - 1
    while (i > 0) {
      const p = (i - 1) >> 1
      if (heap[p][0] <= heap[i][0]) break
      ;[heap[p], heap[i]] = [heap[i], heap[p]]
      i = p
    }
  }
  const pop = (heap) => {
    const top = heap[0]
    const last = heap.pop()
    if (heap.length) {
      heap[0] = last
      let i = 0
      while (true) {
        let s = i,
          l = 2 * i + 1,
          r = 2 * i + 2
        if (l < heap.length && heap[l][0] < heap[s][0]) s = l
        if (r < heap.length && heap[r][0] < heap[s][0]) s = r
        if (s === i) break
        ;[heap[s], heap[i]] = [heap[i], heap[s]]
        i = s
      }
    }
    return top
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 从行堆中取
      while (rowHeaps[i].length && rowHeaps[i][0][1] < j) pop(rowHeaps[i])
      if (
        rowHeaps[i].length &&
        (dist[i][j] === -1 || rowHeaps[i][0][0] + 1 < dist[i][j])
      ) {
        dist[i][j] = rowHeaps[i][0][0] + 1
      }
      // 从列堆中取
      while (colHeaps[j].length && colHeaps[j][0][1] < i) pop(colHeaps[j])
      if (
        colHeaps[j].length &&
        (dist[i][j] === -1 || colHeaps[j][0][0] + 1 < dist[i][j])
      ) {
        dist[i][j] = colHeaps[j][0][0] + 1
      }
      if (dist[i][j] !== -1) {
        push(rowHeaps[i], [dist[i][j], j + grid[i][j]])
        push(colHeaps[j], [dist[i][j], i + grid[i][j]])
      }
    }
  }
  return dist[m - 1][n - 1]
}
