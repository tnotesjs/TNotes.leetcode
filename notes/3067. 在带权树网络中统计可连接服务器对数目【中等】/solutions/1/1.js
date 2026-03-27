/**
 * @param {number[][]} edges
 * @param {number} signalSpeed
 * @return {number[]}
 */
var countPairsOfConnectableServers = function(edges, signalSpeed) {
  const n = edges.length + 1
  const g = Array.from({length: n}, () => [])
  for (const [u, v, w] of edges) {
    g[u].push([v, w])
    g[v].push([u, w])
  }
  const res = new Array(n).fill(0)
  for (let c = 0; c < n; c++) {
    let prev = 0
    for (const [next, w] of g[c]) {
      // 统计以 c 为根，next 方向上距离能被 signalSpeed 整除的节点数
      let cnt = 0
      const dfs = (node, parent, dist) => {
        if (dist % signalSpeed === 0) cnt++
        for (const [nei, nw] of g[node]) {
          if (nei !== parent) dfs(nei, node, dist + nw)
        }
      }
      dfs(next, c, w)
      res[c] += prev * cnt
      prev += cnt
    }
  }
  return res
}
