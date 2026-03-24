/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  const dist = new Array(n + 1).fill(Infinity)
  dist[k] = 0
  for (let i = 0; i < n - 1; i++) {
    for (const [u, v, w] of times) {
      if (dist[u] !== Infinity && dist[u] + w < dist[v]) {
        dist[v] = dist[u] + w
      }
    }
  }
  let res = 0
  for (let i = 1; i <= n; i++) {
    if (dist[i] === Infinity) return -1
    res = Math.max(res, dist[i])
  }
  return res
}
