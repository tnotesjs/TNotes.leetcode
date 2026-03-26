/**
 * @param {number[][]} edges
 * @param {number[]} coins
 * @param {number} k
 * @return {number}
 */
var maximumPoints = function(edges, coins, k) {
  const n = coins.length
  const adj = Array.from({length: n}, () => [])
  for (const [u, v] of edges) {
    adj[u].push(v)
    adj[v].push(u)
  }
  const MAX_J = 14
  const memo = Array.from({length: n}, () => new Array(MAX_J + 1).fill(0))
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
  for (let idx = order.length - 1; idx >= 0; idx--) {
    const node = order[idx]
    for (let j = 0; j <= MAX_J; j++) {
      const val = coins[node] >> j
      let opt1 = val - k
      let opt2 = val >> 1
      for (const next of adj[node]) {
        if (next === parent[node]) continue
        opt1 += memo[next][j]
        opt2 += j + 1 <= MAX_J ? memo[next][j + 1] : 0
      }
      memo[node][j] = Math.max(opt1, opt2)
    }
  }
  return memo[0][0]
}
