/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} disappear
 * @return {number[]}
 */
var minimumTime = function(n, edges, disappear) {
  const g = Array.from({length: n}, () => [])
  for (const [u, v, w] of edges) {
    g[u].push([v, w])
    g[v].push([u, w])
  }
  const dist = new Array(n).fill(Infinity)
  dist[0] = 0
  // Dijkstra
  const pq = new MinPriorityQueue({ priority: x => x[1] })
  pq.enqueue([0, 0])
  while (!pq.isEmpty()) {
    const [u, d] = pq.dequeue().element
    if (d > dist[u]) continue
    for (const [v, w] of g[u]) {
      const nd = d + w
      if (nd < dist[v] && nd < disappear[v]) {
        dist[v] = nd
        pq.enqueue([v, nd])
      }
    }
  }
  return dist.map(d => d === Infinity ? -1 : d)
}
