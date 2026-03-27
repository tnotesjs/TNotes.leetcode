/**
 * @param {number[][]} edges
 * @return {number}
 */
var countGoodNodes = function(edges) {
  const n = edges.length + 1
  const g = Array.from({length: n}, () => [])
  for (const [u, v] of edges) {
    g[u].push(v)
    g[v].push(u)
  }
  const subtreeSize = new Array(n).fill(0)
  let good = 0
  const dfs = (u, parent) => {
    subtreeSize[u] = 1
    const childSizes = []
    for (const v of g[u]) {
      if (v === parent) continue
      dfs(v, u)
      subtreeSize[u] += subtreeSize[v]
      childSizes.push(subtreeSize[v])
    }
    if (childSizes.length === 0 || childSizes.every(s => s === childSizes[0])) {
      good++
    }
  }
  dfs(0, -1)
  return good
}
