/**
 * @param {number[]} coins
 * @param {number[][]} edges
 * @return {number}
 */
var collectTheCoins = function (coins, edges) {
  const n = coins.length
  const g = Array.from({ length: n }, () => new Set())
  const deg = new Array(n).fill(0)
  for (const [u, v] of edges) {
    g[u].add(v)
    g[v].add(u)
    deg[u]++
    deg[v]++
  }

  // 第一轮：删除所有不含金币的叶子
  let queue = []
  for (let i = 0; i < n; i++) {
    if (deg[i] === 1 && coins[i] === 0) queue.push(i)
  }
  while (queue.length) {
    const u = queue.pop()
    for (const v of g[u]) {
      g[v].delete(u)
      deg[v]--
      if (deg[v] === 1 && coins[v] === 0) queue.push(v)
    }
    g[u].clear()
    deg[u] = 0
  }

  // 第二轮：剥离两层叶子
  for (let t = 0; t < 2; t++) {
    queue = []
    for (let i = 0; i < n; i++) {
      if (deg[i] === 1) queue.push(i)
    }
    for (const u of queue) {
      for (const v of g[u]) {
        g[v].delete(u)
        deg[v]--
      }
      g[u].clear()
      deg[u] = 0
    }
  }

  // 统计剩余边数
  let edgeCount = 0
  for (let i = 0; i < n; i++) edgeCount += g[i].size
  return edgeCount // 无向图每条边计了两次，但答案要 * 2
}
