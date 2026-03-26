/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countCompleteComponents = function (n, edges) {
  const parent = Array.from({ length: n }, (_, i) => i)
  const rank = new Array(n).fill(0)

  function find(x) {
    while (parent[x] !== x) {
      parent[x] = parent[parent[x]]
      x = parent[x]
    }
    return x
  }
  function union(x, y) {
    const px = find(x),
      py = find(y)
    if (px === py) return
    if (rank[px] < rank[py]) parent[px] = py
    else if (rank[px] > rank[py]) parent[py] = px
    else {
      parent[py] = px
      rank[px]++
    }
  }

  for (const [a, b] of edges) union(a, b)

  const vertexCount = new Map()
  const edgeCount = new Map()
  for (let i = 0; i < n; i++) {
    const p = find(i)
    vertexCount.set(p, (vertexCount.get(p) || 0) + 1)
  }
  for (const [a, b] of edges) {
    const p = find(a)
    edgeCount.set(p, (edgeCount.get(p) || 0) + 1)
  }

  let ans = 0
  for (const [p, v] of vertexCount) {
    const e = edgeCount.get(p) || 0
    if (e === (v * (v - 1)) / 2) ans++
  }
  return ans
}
