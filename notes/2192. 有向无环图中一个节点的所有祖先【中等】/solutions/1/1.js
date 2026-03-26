/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var getAncestors = function (n, edges) {
  const graph = Array.from({ length: n }, () => [])
  for (const [from, to] of edges) {
    graph[from].push(to)
  }
  const ans = Array.from({ length: n }, () => new Set())
  for (let i = 0; i < n; i++) {
    const visited = new Set([i])
    const queue = [i]
    while (queue.length) {
      const node = queue.shift()
      for (const next of graph[node]) {
        if (!visited.has(next)) {
          visited.add(next)
          ans[next].add(i)
          queue.push(next)
        }
      }
    }
  }
  return ans.map((s) => [...s].sort((a, b) => a - b))
}
