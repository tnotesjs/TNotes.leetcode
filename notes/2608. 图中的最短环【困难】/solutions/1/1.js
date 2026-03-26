/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var findShortestCycle = function (n, edges) {
  const g = Array.from({ length: n }, () => [])
  for (const [u, v] of edges) {
    g[u].push(v)
    g[v].push(u)
  }
  let ans = Infinity
  for (let start = 0; start < n; start++) {
    const dist = new Array(n).fill(-1)
    dist[start] = 0
    const queue = [start]
    let head = 0
    while (head < queue.length) {
      const u = queue[head++]
      for (const v of g[u]) {
        if (dist[v] === -1) {
          dist[v] = dist[u] + 1
          queue.push(v)
        } else if (dist[v] >= dist[u]) {
          ans = Math.min(ans, dist[u] + dist[v] + 1)
        }
      }
    }
  }
  return ans === Infinity ? -1 : ans
}
