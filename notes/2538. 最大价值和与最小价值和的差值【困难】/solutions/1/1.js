/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} price
 * @return {number}
 */
var maxOutput = function (n, edges, price) {
  const g = Array.from({ length: n }, () => [])
  for (const [u, v] of edges) {
    g[u].push(v)
    g[v].push(u)
  }
  let ans = 0
  // 返回 [带叶子端点的最长路径和, 不带叶子端点的最长路径和]
  const dfs = (u, fa) => {
    let withLeaf = price[u], withoutLeaf = 0
    for (const v of g[u]) {
      if (v === fa) continue
      const [cw, cwt] = dfs(v, u)
      ans = Math.max(ans, withLeaf + cwt, withoutLeaf + cw)
      withLeaf = Math.max(withLeaf, price[u] + cw)
      withoutLeaf = Math.max(withoutLeaf, price[u] + cwt)
    }
    return [withLeaf, withoutLeaf]
  }
  dfs(0, -1)
  return ans
}
