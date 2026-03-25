/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start_node
 * @param {number} end_node
 * @return {number}
 */
var maxProbability = function (n, edges, succProb, start_node, end_node) {
  const adj = Array.from({ length: n }, () => [])
  for (let i = 0; i < edges.length; i++) {
    const [u, v] = edges[i]
    adj[u].push([v, succProb[i]])
    adj[v].push([u, succProb[i]])
  }
  const prob = new Float64Array(n)
  prob[start_node] = 1
  // BFS (类似 Dijkstra，用队列近似)
  const queue = [start_node]
  while (queue.length) {
    const node = queue.shift()
    for (const [next, p] of adj[node]) {
      if (prob[node] * p > prob[next]) {
        prob[next] = prob[node] * p
        queue.push(next)
      }
    }
  }
  return prob[end_node]
}
