/**
 * @param {number} n
 * @param {number[][]} paths
 * @return {number[]}
 */
var gardenNoAdj = function (n, paths) {
  const graph = Array.from({ length: n + 1 }, () => [])
  for (const [u, v] of paths) {
    graph[u].push(v)
    graph[v].push(u)
  }
  const res = new Array(n).fill(0)
  for (let i = 1; i <= n; i++) {
    const used = new Set()
    for (const j of graph[i]) {
      if (res[j - 1] > 0) used.add(res[j - 1])
    }
    for (let c = 1; c <= 4; c++) {
      if (!used.has(c)) {
        res[i - 1] = c
        break
      }
    }
  }
  return res
}
