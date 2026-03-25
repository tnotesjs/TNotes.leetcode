/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var countPaths = function (n, roads) {
  const MOD = 1e9 + 7
  const adj = Array.from({ length: n }, () => [])
  for (const [u, v, w] of roads) {
    adj[u].push([v, w])
    adj[v].push([u, w])
  }
  const dist = new Array(n).fill(Infinity)
  const ways = new Array(n).fill(0)
  dist[0] = 0
  ways[0] = 1
  // Dijkstra with min-heap
  const h = [[0, 0]] // [dist, node]
  const push = (d, u) => {
    h.push([d, u])
    let i = h.length - 1
    while (i > 0) {
      const p = (i - 1) >> 1
      if (h[p][0] > h[i][0]) {
        ;[h[p], h[i]] = [h[i], h[p]]
        i = p
      } else break
    }
  }
  const pop = () => {
    const t = h[0]
    h[0] = h[h.length - 1]
    h.pop()
    let i = 0
    while (true) {
      let s = i,
        l = 2 * i + 1,
        r = 2 * i + 2
      if (l < h.length && h[l][0] < h[s][0]) s = l
      if (r < h.length && h[r][0] < h[s][0]) s = r
      if (s !== i) {
        ;[h[s], h[i]] = [h[i], h[s]]
        i = s
      } else break
    }
    return t
  }
  while (h.length) {
    const [d, u] = pop()
    if (d > dist[u]) continue
    for (const [v, w] of adj[u]) {
      if (d + w < dist[v]) {
        dist[v] = d + w
        ways[v] = ways[u]
        push(d + w, v)
      } else if (d + w === dist[v]) {
        ways[v] = (ways[v] + ways[u]) % MOD
      }
    }
  }
  return ways[n - 1]
}
