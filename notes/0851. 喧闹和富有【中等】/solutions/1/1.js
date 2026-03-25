/**
 * @param {number[][]} richer
 * @param {number[]} quiet
 * @return {number[]}
 */
var loudAndRich = function (richer, quiet) {
  const n = quiet.length
  const graph = Array.from({ length: n }, () => [])
  for (const [a, b] of richer) graph[b].push(a)
  const res = new Array(n).fill(-1)
  const dfs = (u) => {
    if (res[u] !== -1) return res[u]
    res[u] = u
    for (const v of graph[u]) {
      const cand = dfs(v)
      if (quiet[cand] < quiet[res[u]]) res[u] = cand
    }
    return res[u]
  }
  for (let i = 0; i < n; i++) dfs(i)
  return res
}
