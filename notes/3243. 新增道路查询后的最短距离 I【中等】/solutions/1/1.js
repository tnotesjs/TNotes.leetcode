/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var shortestDistanceAfterQueries = function(n, queries) {
  const g = Array.from({length: n}, () => [])
  for (let i = 0; i < n - 1; i++) g[i].push(i + 1)
  const res = []
  for (const [u, v] of queries) {
    g[u].push(v)
    // BFS from 0 to n-1
    const dist = new Array(n).fill(-1)
    dist[0] = 0
    const q = [0]
    let head = 0
    while (head < q.length) {
      const cur = q[head++]
      for (const next of g[cur]) {
        if (dist[next] === -1) {
          dist[next] = dist[cur] + 1
          q.push(next)
        }
      }
    }
    res.push(dist[n - 1])
  }
  return res
}
