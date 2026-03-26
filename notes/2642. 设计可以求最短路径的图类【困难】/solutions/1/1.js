/**
 * @param {number} n
 * @param {number[][]} edges
 */
var Graph = function (n, edges) {
  this.n = n
  this.adj = Array.from({ length: n }, () => [])
  for (const [from, to, cost] of edges) {
    this.adj[from].push([to, cost])
  }
}

/**
 * @param {number[]} edge
 * @return {void}
 */
Graph.prototype.addEdge = function (edge) {
  this.adj[edge[0]].push([edge[1], edge[2]])
}

/**
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
Graph.prototype.shortestPath = function (node1, node2) {
  const dist = new Array(this.n).fill(Infinity)
  dist[node1] = 0
  const visited = new Array(this.n).fill(false)
  for (let i = 0; i < this.n; i++) {
    let u = -1
    for (let v = 0; v < this.n; v++) {
      if (!visited[v] && (u === -1 || dist[v] < dist[u])) u = v
    }
    if (u === -1 || dist[u] === Infinity) break
    visited[u] = true
    for (const [v, w] of this.adj[u]) {
      if (dist[u] + w < dist[v]) dist[v] = dist[u] + w
    }
  }
  return dist[node2] === Infinity ? -1 : dist[node2]
}
