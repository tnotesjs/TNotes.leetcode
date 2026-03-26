var minimumCost = function (source, target, original, changed, cost) {
  const strMap = new Map()
  let idx = 0
  const getId = (s) => {
    if (!strMap.has(s)) strMap.set(s, idx++)
    return strMap.get(s)
  }
  for (let i = 0; i < original.length; i++) {
    getId(original[i])
    getId(changed[i])
  }
  const sz = strMap.size
  const INF = Infinity
  const dist = Array.from({ length: sz }, () => Array(sz).fill(INF))
  for (let i = 0; i < sz; i++) dist[i][i] = 0
  for (let i = 0; i < cost.length; i++) {
    const u = getId(original[i]),
      v = getId(changed[i])
    dist[u][v] = Math.min(dist[u][v], cost[i])
  }
  for (let k = 0; k < sz; k++)
    for (let i = 0; i < sz; i++)
      for (let j = 0; j < sz; j++)
        dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j])
  const lengths = new Set()
  for (const s of original) lengths.add(s.length)
  const n = source.length
  const dp = Array(n + 1).fill(INF)
  dp[0] = 0
  for (let i = 0; i < n; i++) {
    if (dp[i] === INF) continue
    if (source[i] === target[i]) dp[i + 1] = Math.min(dp[i + 1], dp[i])
    for (const len of lengths) {
      if (i + len > n) continue
      const srcSub = source.substring(i, i + len)
      const tgtSub = target.substring(i, i + len)
      if (strMap.has(srcSub) && strMap.has(tgtSub)) {
        const u = strMap.get(srcSub),
          v = strMap.get(tgtSub)
        if (dist[u][v] < INF)
          dp[i + len] = Math.min(dp[i + len], dp[i] + dist[u][v])
      }
    }
  }
  return dp[n] === INF ? -1 : dp[n]
}
