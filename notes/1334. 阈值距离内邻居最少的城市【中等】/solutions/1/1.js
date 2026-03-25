/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
var findTheCity = function (n, edges, distanceThreshold) {
  const dist = Array.from({ length: n }, () => new Array(n).fill(Infinity))
  for (let i = 0; i < n; i++) dist[i][i] = 0
  for (const [u, v, w] of edges) {
    dist[u][v] = w
    dist[v][u] = w
  }
  // Floyd-Warshall
  for (let k = 0; k < n; k++)
    for (let i = 0; i < n; i++)
      for (let j = 0; j < n; j++)
        if (dist[i][k] + dist[k][j] < dist[i][j])
          dist[i][j] = dist[i][k] + dist[k][j]
  let ans = 0,
    minCount = n
  for (let i = 0; i < n; i++) {
    let count = 0
    for (let j = 0; j < n; j++)
      if (i !== j && dist[i][j] <= distanceThreshold) count++
    if (count <= minCount) {
      minCount = count
      ans = i
    }
  }
  return ans
}
