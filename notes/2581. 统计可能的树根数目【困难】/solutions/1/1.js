/**
 * @param {number[][]} edges
 * @param {number[][]} guesses
 * @param {number} k
 * @return {number}
 */
var rootCount = function (edges, guesses, k) {
  const n = edges.length + 1
  const adj = Array.from({ length: n }, () => [])
  for (const [u, v] of edges) {
    adj[u].push(v)
    adj[v].push(u)
  }
  const guessSet = new Set()
  for (const [u, v] of guesses) guessSet.add(u * 100001 + v)

  // BFS 求以 0 为根时的正确猜测数
  const parent = new Array(n).fill(-1)
  const order = []
  const visited = new Uint8Array(n)
  visited[0] = 1
  const queue = [0]
  let front = 0
  let cnt = 0
  while (front < queue.length) {
    const u = queue[front++]
    order.push(u)
    for (const v of adj[u]) {
      if (!visited[v]) {
        visited[v] = 1
        parent[v] = u
        queue.push(v)
        if (guessSet.has(u * 100001 + v)) cnt++
      }
    }
  }

  // 换根 DP
  const cnts = new Array(n)
  cnts[0] = cnt
  let ans = cnt >= k ? 1 : 0
  for (let i = 1; i < order.length; i++) {
    const u = order[i], p = parent[u]
    let c = cnts[p]
    if (guessSet.has(p * 100001 + u)) c--
    if (guessSet.has(u * 100001 + p)) c++
    cnts[u] = c
    if (c >= k) ans++
  }
  return ans
}
