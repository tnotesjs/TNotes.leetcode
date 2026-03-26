var placedCoins = function (edges, cost) {
  const n = cost.length
  const adj = Array.from({ length: n }, () => [])
  for (const [u, v] of edges) {
    adj[u].push(v)
    adj[v].push(u)
  }
  const ans = new Array(n).fill(0)
  const parent = new Array(n).fill(-1)
  const order = []
  const visited = new Uint8Array(n)
  visited[0] = 1
  const stack = [0]
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
  const vals = Array.from({ length: n }, () => [])
  for (let idx = order.length - 1; idx >= 0; idx--) {
    const u = order[idx]
    vals[u] = [cost[u]]
    for (const v of adj[u]) {
      if (v === parent[u]) continue
      vals[u].push(...vals[v])
    }
    vals[u].sort((a, b) => a - b)
    const sz = vals[u].length
    if (sz >= 3) {
      const c1 = vals[u][sz - 1] * vals[u][sz - 2] * vals[u][sz - 3]
      const c2 = vals[u][0] * vals[u][1] * vals[u][sz - 1]
      ans[u] = Math.max(0, c1, c2)
    } else {
      ans[u] = 1
    }
    if (sz > 5)
      vals[u] = [
        vals[u][0],
        vals[u][1],
        vals[u][sz - 3],
        vals[u][sz - 2],
        vals[u][sz - 1],
      ]
  }
  return ans
}
