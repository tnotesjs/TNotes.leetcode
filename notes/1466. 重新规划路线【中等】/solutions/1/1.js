/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function (n, connections) {
  const adj = Array.from({ length: n }, () => [])
  for (const [u, v] of connections) {
    adj[u].push([v, 1]) // 原始方向，需要反转
    adj[v].push([u, 0]) // 反向，不需反转
  }
  let count = 0
  const visited = new Uint8Array(n)
  const queue = [0]
  visited[0] = 1
  while (queue.length) {
    const node = queue.shift()
    for (const [next, cost] of adj[node]) {
      if (visited[next]) continue
      visited[next] = 1
      count += cost
      queue.push(next)
    }
  }
  return count
}
