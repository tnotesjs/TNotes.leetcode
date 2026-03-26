/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} guards
 * @param {number[][]} walls
 * @return {number}
 */
var countUnguarded = function (m, n, guards, walls) {
  // 0=empty, 1=guard, 2=wall, 3=guarded
  const grid = Array.from({ length: m }, () => new Array(n).fill(0))
  for (const [r, c] of guards) grid[r][c] = 1
  for (const [r, c] of walls) grid[r][c] = 2
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]
  for (const [gr, gc] of guards) {
    for (const [dr, dc] of dirs) {
      let r = gr + dr,
        c = gc + dc
      while (
        r >= 0 &&
        r < m &&
        c >= 0 &&
        c < n &&
        grid[r][c] !== 1 &&
        grid[r][c] !== 2
      ) {
        grid[r][c] = 3
        r += dr
        c += dc
      }
    }
  }
  let count = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) count++
    }
  }
  return count
}
