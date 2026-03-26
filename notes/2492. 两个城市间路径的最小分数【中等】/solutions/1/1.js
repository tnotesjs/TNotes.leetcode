/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var minScore = function (n, roads) {
  const g = Array.from({ length: n + 1 }, () => [])
  for (const [u, v, d] of roads) {
    g[u].push([v, d])
    g[v].push([u, d])
  }
  // BFS 找连通分量中最小边权
  const visited = new Uint8Array(n + 1)
  const queue = [1]
  visited[1] = 1
  let ans = Infinity
  for (let i = 0; i < queue.length; i++) {
    const u = queue[i]
    for (const [v, d] of g[u]) {
      ans = Math.min(ans, d)
      if (!visited[v]) {
        visited[v] = 1
        queue.push(v)
      }
    }
  }
  return ans
}
