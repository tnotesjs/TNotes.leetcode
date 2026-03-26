/**
 * @param {number[]} vals
 * @param {number[][]} edges
 * @param {number} k
 * @return {number}
 */
var maxStarSum = function (vals, edges, k) {
  const n = vals.length
  const neighbors = Array.from({ length: n }, () => [])
  for (const [u, v] of edges) {
    neighbors[u].push(vals[v])
    neighbors[v].push(vals[u])
  }
  let ans = -Infinity
  for (let i = 0; i < n; i++) {
    neighbors[i].sort((a, b) => b - a)
    let sum = vals[i]
    for (let j = 0; j < Math.min(k, neighbors[i].length); j++) {
      if (neighbors[i][j] <= 0) break
      sum += neighbors[i][j]
    }
    ans = Math.max(ans, sum)
  }
  return ans
}
