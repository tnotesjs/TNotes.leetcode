/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function (n, roads) {
  const degree = new Array(n).fill(0)
  const connected = Array.from({ length: n }, () => new Set())
  for (const [a, b] of roads) {
    degree[a]++
    degree[b]++
    connected[a].add(b)
    connected[b].add(a)
  }
  let res = 0
  for (let i = 0; i < n; i++)
    for (let j = i + 1; j < n; j++) {
      let rank = degree[i] + degree[j]
      if (connected[i].has(j)) rank--
      res = Math.max(res, rank)
    }
  return res
}
