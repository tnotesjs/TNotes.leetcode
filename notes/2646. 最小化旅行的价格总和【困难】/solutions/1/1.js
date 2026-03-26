/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} price
 * @param {number[][]} trips
 * @return {number}
 */
var minimumTotalPrice = function (n, edges, price, trips) {
  const adj = Array.from({ length: n }, () => [])
  for (const [u, v] of edges) {
    adj[u].push(v)
    adj[v].push(u)
  }

  const cnt = new Array(n).fill(0)

  // 统计每个节点的经过次数
  const findPath = (start, end) => {
    const path = []
    const dfs = (u, parent) => {
      path.push(u)
      if (u === end) return true
      for (const v of adj[u]) {
        if (v !== parent && dfs(v, u)) return true
      }
      path.pop()
      return false
    }
    dfs(start, -1)
    return path
  }

  for (const [start, end] of trips) {
    for (const node of findPath(start, end)) cnt[node]++
  }

  // 树形 DP（打家劫舍变体）
  const dp = (u, parent) => {
    let notHalved = price[u] * cnt[u]
    let halved = (price[u] * cnt[u]) >> 1
    for (const v of adj[u]) {
      if (v === parent) continue
      const [childNot, childHalf] = dp(v, u)
      notHalved += Math.min(childNot, childHalf)
      halved += childNot
    }
    return [notHalved, halved]
  }

  const [a, b] = dp(0, -1)
  return Math.min(a, b)
}
