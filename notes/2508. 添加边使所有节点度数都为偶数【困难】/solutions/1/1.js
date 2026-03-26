/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var isPossible = function (n, edges) {
  const adj = Array.from({ length: n + 1 }, () => new Set())
  for (const [u, v] of edges) {
    adj[u].add(v)
    adj[v].add(u)
  }
  const odd = []
  for (let i = 1; i <= n; i++) {
    if (adj[i].size % 2 === 1) odd.push(i)
  }
  if (odd.length === 0) return true
  if (odd.length === 2) {
    const [a, b] = odd
    if (!adj[a].has(b)) return true
    for (let c = 1; c <= n; c++) {
      if (c !== a && c !== b && !adj[c].has(a) && !adj[c].has(b)) return true
    }
    return false
  }
  if (odd.length === 4) {
    const [a, b, c, d] = odd
    if (!adj[a].has(b) && !adj[c].has(d)) return true
    if (!adj[a].has(c) && !adj[b].has(d)) return true
    if (!adj[a].has(d) && !adj[b].has(c)) return true
    return false
  }
  return false
}
