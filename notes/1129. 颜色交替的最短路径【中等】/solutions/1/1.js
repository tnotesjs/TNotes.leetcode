/**
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
var shortestAlternatingPaths = function (n, redEdges, blueEdges) {
  const graph = [
    new Array(n).fill(null).map(() => []),
    new Array(n).fill(null).map(() => []),
  ]
  for (const [u, v] of redEdges) graph[0][u].push(v)
  for (const [u, v] of blueEdges) graph[1][u].push(v)
  const dist = Array.from({ length: 2 }, () => new Array(n).fill(Infinity))
  dist[0][0] = dist[1][0] = 0
  const queue = [
    [0, 0],
    [0, 1],
  ] // [node, color]
  while (queue.length) {
    const [node, color] = queue.shift()
    const next = 1 - color
    for (const nei of graph[next][node]) {
      if (dist[next][nei] > dist[color][node] + 1) {
        dist[next][nei] = dist[color][node] + 1
        queue.push([nei, next])
      }
    }
  }
  return Array.from({ length: n }, (_, i) => {
    const d = Math.min(dist[0][i], dist[1][i])
    return d === Infinity ? -1 : d
  })
}
