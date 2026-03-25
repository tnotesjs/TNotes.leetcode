/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function (n, dislikes) {
  const graph = Array.from({ length: n + 1 }, () => [])
  for (const [a, b] of dislikes) {
    graph[a].push(b)
    graph[b].push(a)
  }
  const color = new Array(n + 1).fill(0)
  for (let i = 1; i <= n; i++) {
    if (color[i] !== 0) continue
    const queue = [i]
    color[i] = 1
    while (queue.length) {
      const u = queue.shift()
      for (const v of graph[u]) {
        if (color[v] === 0) {
          color[v] = -color[u]
          queue.push(v)
        } else if (color[v] === color[u]) return false
      }
    }
  }
  return true
}
