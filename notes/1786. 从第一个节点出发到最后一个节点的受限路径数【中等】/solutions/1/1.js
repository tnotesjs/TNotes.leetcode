/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countRestrictedPaths = function (n, edges) {
  const MOD = 1e9 + 7
  // 建图
  const graph = Array.from({ length: n + 1 }, () => [])
  for (const [u, v, w] of edges) {
    graph[u].push([v, w])
    graph[v].push([u, w])
  }
  // Dijkstra 从 n 开始
  const dist = new Array(n + 1).fill(Infinity)
  dist[n] = 0
  // 简易优先队列（数组模拟）
  const pq = [[0, n]] // [dist, node]
  while (pq.length) {
    pq.sort((a, b) => a[0] - b[0])
    const [d, u] = pq.shift()
    if (d > dist[u]) continue
    for (const [v, w] of graph[u]) {
      if (dist[u] + w < dist[v]) {
        dist[v] = dist[u] + w
        pq.push([dist[v], v])
      }
    }
  }
  // DP：按 dist 升序排列节点
  const order = Array.from({ length: n }, (_, i) => i + 1)
  order.sort((a, b) => dist[a] - dist[b])
  const dp = new Array(n + 1).fill(0)
  dp[n] = 1
  for (const u of order) {
    for (const [v, _] of graph[u]) {
      if (dist[u] > dist[v]) {
        dp[u] = (dp[u] + dp[v]) % MOD
      }
    }
  }
  return dp[1]
}
