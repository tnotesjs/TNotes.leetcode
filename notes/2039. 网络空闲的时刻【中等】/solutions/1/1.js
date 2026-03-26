/**
 * @param {number[][]} edges
 * @param {number[]} patience
 * @return {number}
 */
var networkBecomesIdle = function (edges, patience) {
  const n = patience.length
  const adj = Array.from({ length: n }, () => [])
  for (const [u, v] of edges) {
    adj[u].push(v)
    adj[v].push(u)
  }
  const dist = new Array(n).fill(-1)
  dist[0] = 0
  const queue = [0]
  let head = 0
  while (head < queue.length) {
    const u = queue[head++]
    for (const v of adj[u]) {
      if (dist[v] === -1) {
        dist[v] = dist[u] + 1
        queue.push(v)
      }
    }
  }
  let ans = 0
  for (let i = 1; i < n; i++) {
    const rt = 2 * dist[i]
    const lastSend = Math.floor((rt - 1) / patience[i]) * patience[i]
    ans = Math.max(ans, lastSend + rt)
  }
  return ans + 1
}
