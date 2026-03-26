/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} restricted
 * @return {number}
 */
var reachableNodes = function (n, edges, restricted) {
  const blocked = new Set(restricted)
  const graph = Array.from({ length: n }, () => [])
  for (const [u, v] of edges) {
    graph[u].push(v)
    graph[v].push(u)
  }
  let count = 0
  const visited = new Uint8Array(n)
  const stack = [0]
  visited[0] = 1
  while (stack.length) {
    const node = stack.pop()
    count++
    for (const next of graph[node]) {
      if (!visited[next] && !blocked.has(next)) {
        visited[next] = 1
        stack.push(next)
      }
    }
  }
  return count
}
