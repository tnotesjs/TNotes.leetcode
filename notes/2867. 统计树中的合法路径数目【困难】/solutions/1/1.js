/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countPaths = function (n, edges) {
  // 质数筛
  const isPrime = new Array(n + 1).fill(true)
  isPrime[0] = isPrime[1] = false
  for (let i = 2; i * i <= n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= n; j += i) isPrime[j] = false
    }
  }
  // 建图
  const adj = Array.from({ length: n + 1 }, () => [])
  for (const [u, v] of edges) {
    adj[u].push(v)
    adj[v].push(u)
  }
  // 并查集（只合并非质数节点）
  const parent = Array.from({ length: n + 1 }, (_, i) => i)
  const size = new Array(n + 1).fill(1)
  function find(x) {
    while (parent[x] !== x) {
      parent[x] = parent[parent[x]]
      x = parent[x]
    }
    return x
  }
  function union(x, y) {
    let px = find(x),
      py = find(y)
    if (px === py) return
    if (size[px] < size[py]) [px, py] = [py, px]
    parent[py] = px
    size[px] += size[py]
  }
  for (const [u, v] of edges) {
    if (!isPrime[u] && !isPrime[v]) union(u, v)
  }
  // 枚举每个质数节点，统计经过该节点的合法路径
  let ans = 0
  for (let p = 1; p <= n; p++) {
    if (!isPrime[p]) continue
    let sum = 0
    for (const nb of adj[p]) {
      if (isPrime[nb]) continue
      const sz = size[find(nb)]
      ans += sum * sz + sz
      sum += sz
    }
  }
  return ans
}
