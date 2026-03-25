/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function (piles) {
  const n = piles.length
  const suffixSum = new Array(n + 1).fill(0)
  for (let i = n - 1; i >= 0; i--) {
    suffixSum[i] = suffixSum[i + 1] + piles[i]
  }
  const memo = new Map()
  function dp(i, m) {
    if (i >= n) return 0
    if (2 * m >= n - i) return suffixSum[i]
    const key = i * 200 + m
    if (memo.has(key)) return memo.get(key)
    let best = 0
    for (let x = 1; x <= 2 * m; x++) {
      best = Math.max(best, suffixSum[i] - dp(i + x, Math.max(m, x)))
    }
    memo.set(key, best)
    return best
  }
  return dp(0, 1)
}
