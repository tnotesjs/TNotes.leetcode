/**
 * @param {number[][]} edges
 * @param {number[]} values
 * @return {number}
 */
var maximumScoreAfterOperations = function(edges, values) {
  const n = values.length
  const adj = Array.from({length: n}, () => [])
  for (const [u, v] of edges) {
    adj[u].push(v)
    adj[v].push(u)
  }
  let totalSum = 0
  for (const v of values) totalSum += v
  // minKeep[node] = 子树中需要保留的最小值之和
  const order = []
  const parent = new Array(n).fill(-1)
  const visited = new Uint8Array(n)
  const stack = [0]
  visited[0] = 1
  while (stack.length) {
    const u = stack.pop()
    order.push(u)
    for (const v of adj[u]) {
      if (!visited[v]) {
        visited[v] = 1
        parent[v] = u
        stack.push(v)
      }
    }
  }
  const minKeep = new Array(n).fill(0)
  for (let i = order.length - 1; i >= 0; i--) {
    const node = order[i]
    let isLeaf = true, childSum = 0
    for (const v of adj[node]) {
      if (v !== parent[node]) {
        isLeaf = false
        childSum += minKeep[v]
      }
    }
    minKeep[node] = isLeaf ? values[node] : Math.min(values[node], childSum)
  }
  return totalSum - minKeep[0]
}
