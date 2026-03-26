/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var minEdgeReversals = function(n, edges) {
  const adj = Array.from({length: n}, () => [])
  for (const [u, v] of edges) {
    adj[u].push([v, 0]) // 正向边无需反转
    adj[v].push([u, 1]) // 反向边需反转
  }
  const ans = new Int32Array(n)
  const parent = new Int32Array(n).fill(-1)
  const pcost = new Int32Array(n)
  const vis = new Uint8Array(n)
  const order = []
  const queue = [0]; let head = 0; vis[0] = 1
  let cost0 = 0
  while (head < queue.length) {
    const u = queue[head++]; order.push(u)
    for (const [v, w] of adj[u]) {
      if (!vis[v]) { vis[v] = 1; parent[v] = u; pcost[v] = w; cost0 += w; queue.push(v) }
    }
  }
  ans[0] = cost0
  for (let i = 1; i < order.length; i++) {
    const u = order[i]
    ans[u] = ans[parent[u]] + (pcost[u] === 0 ? 1 : -1)
  }
  return Array.from(ans)
}
