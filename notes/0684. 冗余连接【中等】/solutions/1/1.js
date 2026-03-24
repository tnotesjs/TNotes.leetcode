/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
  const n = edges.length
  const parent = Array.from({ length: n + 1 }, (_, i) => i)
  const rank = new Array(n + 1).fill(0)
  const find = (x) => {
    while (parent[x] !== x) x = parent[x] = parent[parent[x]]
    return x
  }
  for (const [u, v] of edges) {
    const pu = find(u),
      pv = find(v)
    if (pu === pv) return [u, v]
    if (rank[pu] < rank[pv]) parent[pu] = pv
    else if (rank[pu] > rank[pv]) parent[pv] = pu
    else {
      parent[pv] = pu
      rank[pu]++
    }
  }
  return []
}
