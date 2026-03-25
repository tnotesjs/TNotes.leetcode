/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var containsCycle = function (grid) {
  const m = grid.length,
    n = grid[0].length
  const parent = new Int32Array(m * n)
  const rank = new Uint8Array(m * n)
  for (let i = 0; i < m * n; i++) parent[i] = i
  const find = (x) => {
    while (parent[x] !== x) {
      parent[x] = parent[parent[x]]
      x = parent[x]
    }
    return x
  }
  const union = (a, b) => {
    const ra = find(a),
      rb = find(b)
    if (ra === rb) return true // 已连通，形成环
    if (rank[ra] < rank[rb]) parent[ra] = rb
    else if (rank[ra] > rank[rb]) parent[rb] = ra
    else {
      parent[rb] = ra
      rank[ra]++
    }
    return false
  }
  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++) {
      if (j + 1 < n && grid[i][j] === grid[i][j + 1])
        if (union(i * n + j, i * n + j + 1)) return true
      if (i + 1 < m && grid[i][j] === grid[i + 1][j])
        if (union(i * n + j, (i + 1) * n + j)) return true
    }
  return false
}
