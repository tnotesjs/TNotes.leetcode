/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
  const n = graph.length
  const color = new Array(n).fill(0) // 0:未染色 1:红 -1:蓝
  for (let i = 0; i < n; i++) {
    if (color[i] !== 0) continue
    const queue = [i]
    color[i] = 1
    while (queue.length) {
      const u = queue.shift()
      for (const v of graph[u]) {
        if (color[v] === 0) {
          color[v] = -color[u]
          queue.push(v)
        } else if (color[v] === color[u]) {
          return false
        }
      }
    }
  }
  return true
}
