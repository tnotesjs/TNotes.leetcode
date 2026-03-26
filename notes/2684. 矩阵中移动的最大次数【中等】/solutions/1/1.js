/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxMoves = function (grid) {
  const m = grid.length,
    n = grid[0].length
  let reachable = new Set()
  for (let i = 0; i < m; i++) reachable.add(i)
  for (let j = 0; j < n - 1; j++) {
    const next = new Set()
    for (const i of reachable) {
      for (const di of [-1, 0, 1]) {
        const ni = i + di
        if (ni >= 0 && ni < m && grid[ni][j + 1] > grid[i][j]) {
          next.add(ni)
        }
      }
    }
    if (next.size === 0) return j
    reachable = next
  }
  return n - 1
}
