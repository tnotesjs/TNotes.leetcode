/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
  let dp = new Array(n).fill(Infinity)
  dp[src] = 0
  for (let i = 0; i <= k; i++) {
    const tmp = dp.slice()
    for (const [u, v, w] of flights) {
      if (dp[u] !== Infinity) {
        tmp[v] = Math.min(tmp[v], dp[u] + w)
      }
    }
    dp = tmp
  }
  return dp[dst] === Infinity ? -1 : dp[dst]
}
