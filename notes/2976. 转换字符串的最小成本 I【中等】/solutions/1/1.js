var minimumCost = function (source, target, original, changed, cost) {
  const INF = Infinity
  const dist = Array.from({ length: 26 }, () => Array(26).fill(INF))
  for (let i = 0; i < 26; i++) dist[i][i] = 0
  for (let i = 0; i < cost.length; i++) {
    const u = original[i].charCodeAt(0) - 97
    const v = changed[i].charCodeAt(0) - 97
    dist[u][v] = Math.min(dist[u][v], cost[i])
  }
  for (let k = 0; k < 26; k++)
    for (let i = 0; i < 26; i++)
      for (let j = 0; j < 26; j++)
        dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j])
  let ans = 0
  for (let i = 0; i < source.length; i++) {
    const d = dist[source.charCodeAt(i) - 97][target.charCodeAt(i) - 97]
    if (d === INF) return -1
    ans += d
  }
  return ans
}
