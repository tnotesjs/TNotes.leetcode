/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  const n = grid.length
  const map = new Map()
  for (let i = 0; i < n; i++) {
    const key = grid[i].join(',')
    map.set(key, (map.get(key) || 0) + 1)
  }
  let count = 0
  for (let j = 0; j < n; j++) {
    const col = []
    for (let i = 0; i < n; i++) col.push(grid[i][j])
    const key = col.join(',')
    count += map.get(key) || 0
  }
  return count
}
