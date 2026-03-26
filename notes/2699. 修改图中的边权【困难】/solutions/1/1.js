/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @param {number} target
 * @return {number[][]}
 */
var modifiedGraphEdges = function (n, edges, source, destination, target) {
  const INF = 2e15

  // Phase 1: Dijkstra from destination using only positive edges
  const dDest = new Array(n).fill(INF)
  const vis = new Array(n).fill(false)
  dDest[destination] = 0
  for (let iter = 0; iter < n; iter++) {
    let u = -1,
      best = INF
    for (let i = 0; i < n; i++) {
      if (!vis[i] && dDest[i] < best) {
        best = dDest[i]
        u = i
      }
    }
    if (u === -1) break
    vis[u] = true
    for (const [a, b, w] of edges) {
      if (w === -1) continue
      if (a === u && best + w < dDest[b]) dDest[b] = best + w
      if (b === u && best + w < dDest[a]) dDest[a] = best + w
    }
  }
  if (dDest[source] < target) return []

  // Phase 2: Dijkstra from source, set modifiable edges
  const dist = new Array(n).fill(INF)
  vis.fill(false)
  dist[source] = 0
  for (let iter = 0; iter < n; iter++) {
    let u = -1,
      best = INF
    for (let i = 0; i < n; i++) {
      if (!vis[i] && dist[i] < best) {
        best = dist[i]
        u = i
      }
    }
    if (u === -1) break
    vis[u] = true
    for (const e of edges) {
      let v = -1
      if (e[0] === u) v = e[1]
      else if (e[1] === u) v = e[0]
      else continue
      let w = e[2]
      if (w === -1) {
        w = Math.max(1, target - best - dDest[v])
        e[2] = w
      }
      if (best + w < dist[v]) dist[v] = best + w
    }
  }
  if (dist[destination] !== target) return []

  for (const e of edges) {
    if (e[2] === -1) e[2] = 2000000000
  }
  return edges
}
