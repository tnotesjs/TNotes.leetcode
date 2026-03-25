/**
 * @param {string[]} grid
 * @return {number}
 */
var regionsBySlashes = function (grid) {
  const n = grid.length
  const parent = new Array(n * n * 4).fill(0).map((_, i) => i)

  const find = (x) => {
    if (parent[x] !== x) parent[x] = find(parent[x])
    return parent[x]
  }

  const union = (x, y) => {
    parent[find(x)] = find(y)
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const base = (i * n + j) * 4
      const ch = grid[i][j]

      // 格内连接
      if (ch === '/') {
        union(base + 0, base + 3) // 上 - 左
        union(base + 1, base + 2) // 右 - 下
      } else if (ch === '\\') {
        union(base + 0, base + 1) // 上 - 右
        union(base + 2, base + 3) // 下 - 左
      } else {
        union(base + 0, base + 1)
        union(base + 1, base + 2)
        union(base + 2, base + 3)
      }

      // 相邻格连接
      if (i > 0) union(base + 0, ((i - 1) * n + j) * 4 + 2)
      if (j > 0) union(base + 3, (i * n + j - 1) * 4 + 1)
    }
  }

  let regions = 0
  for (let i = 0; i < n * n * 4; i++) {
    if (find(i) === i) regions++
  }

  return regions
}
