var numberOfSets = function (n, maxDistance, roads) {
  let ans = 0
  for (let mask = 0; mask < 1 << n; mask++) {
    const dist = Array.from({ length: n }, () => Array(n).fill(Infinity))
    for (let i = 0; i < n; i++) dist[i][i] = 0
    for (const [u, v, w] of roads) {
      if ((mask >> u) & 1 && (mask >> v) & 1) {
        dist[u][v] = Math.min(dist[u][v], w)
        dist[v][u] = Math.min(dist[v][u], w)
      }
    }
    for (let k = 0; k < n; k++) {
      if (!((mask >> k) & 1)) continue
      for (let i = 0; i < n; i++) {
        if (!((mask >> i) & 1)) continue
        for (let j = 0; j < n; j++) {
          if (!((mask >> j) & 1)) continue
          dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j])
        }
      }
    }
    let ok = true
    for (let i = 0; i < n && ok; i++) {
      if (!((mask >> i) & 1)) continue
      for (let j = i + 1; j < n && ok; j++) {
        if (!((mask >> j) & 1)) continue
        if (dist[i][j] > maxDistance) ok = false
      }
    }
    if (ok) ans++
  }
  return ans
}
