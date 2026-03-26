/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} values
 * @param {number} k
 * @return {number}
 */
var maxKDivisibleComponents = function (n, edges, values, k) {
  const adj = Array.from({ length: n }, () => [])
  for (const [u, v] of edges) {
    adj[u].push(v)
    adj[v].push(u)
  }
  // BFS 获取拓扑序
  const order = [],
    par = new Array(n).fill(-1)
  const visited = new Array(n).fill(false)
  const queue = [0]
  visited[0] = true
  let head = 0
  while (head < queue.length) {
    const u = queue[head++]
    order.push(u)
    for (const v of adj[u]) {
      if (!visited[v]) {
        visited[v] = true
        par[v] = u
        queue.push(v)
      }
    }
  }
  // 从叶子到根，累加子树和的余数
  const rem = new Array(n).fill(0)
  let ans = 0
  for (let i = order.length - 1; i >= 0; i--) {
    const u = order[i]
    rem[u] = (rem[u] + (values[u] % k)) % k
    if (rem[u] === 0) {
      ans++
    } else if (par[u] !== -1) {
      rem[par[u]] = (rem[par[u]] + rem[u]) % k
    }
  }
  return ans
}
