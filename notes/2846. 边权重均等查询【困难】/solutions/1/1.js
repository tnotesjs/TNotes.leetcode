/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[][]} queries
 * @return {number[]}
 */
var minOperationsQueries = function(n, edges, queries) {
  const LOG = 15
  const adj = Array.from({length: n}, () => [])
  for (const [u, v, w] of edges) {
    adj[u].push([v, w]); adj[v].push([u, w])
  }
  const depth = new Int32Array(n)
  const parent = Array.from({length: LOG}, () => new Int32Array(n).fill(-1))
  const wCnt = Array.from({length: n}, () => new Int32Array(27))
  const vis = new Uint8Array(n)
  const queue = [0]; vis[0] = 1; let head = 0
  while (head < queue.length) {
    const u = queue[head++]
    for (const [v, w] of adj[u]) {
      if (!vis[v]) {
        vis[v] = 1; depth[v] = depth[u] + 1; parent[0][v] = u
        for (let i = 1; i <= 26; i++) wCnt[v][i] = wCnt[u][i]
        wCnt[v][w]++; queue.push(v)
      }
    }
  }
  for (let j = 1; j < LOG; j++)
    for (let i = 0; i < n; i++)
      if (parent[j - 1][i] !== -1) parent[j][i] = parent[j - 1][parent[j - 1][i]]

  const lca = (u, v) => {
    if (depth[u] < depth[v]) { let t = u; u = v; v = t }
    let diff = depth[u] - depth[v]
    for (let j = 0; j < LOG; j++) if ((diff >> j) & 1) u = parent[j][u]
    if (u === v) return u
    for (let j = LOG - 1; j >= 0; j--)
      if (parent[j][u] !== parent[j][v]) { u = parent[j][u]; v = parent[j][v] }
    return parent[0][u]
  }

  return queries.map(([a, b]) => {
    const l = lca(a, b)
    const pathLen = depth[a] + depth[b] - 2 * depth[l]
    let maxW = 0
    for (let w = 1; w <= 26; w++) {
      const cnt = wCnt[a][w] + wCnt[b][w] - 2 * wCnt[l][w]
      if (cnt > maxW) maxW = cnt
    }
    return pathLen - maxW
  })
}
