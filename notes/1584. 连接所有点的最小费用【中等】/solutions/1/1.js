/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function (points) {
  const n = points.length
  // Prim 算法
  const dist = new Array(n).fill(Infinity)
  const visited = new Uint8Array(n)
  dist[0] = 0
  let total = 0
  for (let i = 0; i < n; i++) {
    let u = -1
    for (let j = 0; j < n; j++)
      if (!visited[j] && (u === -1 || dist[j] < dist[u])) u = j
    visited[u] = 1
    total += dist[u]
    for (let v = 0; v < n; v++) {
      if (visited[v]) continue
      const d =
        Math.abs(points[u][0] - points[v][0]) +
        Math.abs(points[u][1] - points[v][1])
      if (d < dist[v]) dist[v] = d
    }
  }
  return total
}
