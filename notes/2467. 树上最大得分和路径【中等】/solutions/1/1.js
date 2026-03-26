/**
 * @param {number[][]} edges
 * @param {number} bob
 * @param {number[]} amount
 * @return {number}
 */
var mostProfitablePath = function (edges, bob, amount) {
  const n = amount.length
  const g = Array.from({ length: n }, () => [])
  for (const [u, v] of edges) {
    g[u].push(v)
    g[v].push(u)
  }

  // 找 Bob 到 0 的路径
  const parent = new Array(n).fill(-1)
  const visited = new Uint8Array(n)
  const queue = [0]
  visited[0] = 1
  for (let i = 0; i < queue.length; i++) {
    const u = queue[i]
    for (const v of g[u]) {
      if (!visited[v]) {
        visited[v] = 1
        parent[v] = u
        queue.push(v)
      }
    }
  }

  // Bob 到 0 的时间
  const bobTime = new Array(n).fill(Infinity)
  let cur = bob, t = 0
  while (cur !== -1) {
    bobTime[cur] = t++
    cur = parent[cur]
  }

  // DFS from 0, Alice 走到叶子节点的最大收益
  let ans = -Infinity
  const dfs = (u, par, time, score) => {
    if (time < bobTime[u]) score += amount[u]
    else if (time === bobTime[u]) score += amount[u] / 2

    let isLeaf = true
    for (const v of g[u]) {
      if (v !== par) {
        isLeaf = false
        dfs(v, u, time + 1, score)
      }
    }
    if (isLeaf) ans = Math.max(ans, score)
  }
  dfs(0, -1, 0, 0)
  return ans
}
