/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestIdealString = function (s, k) {
  const dp = new Array(26).fill(0)
  for (const ch of s) {
    const c = ch.charCodeAt(0) - 97
    let best = 0
    for (let j = Math.max(0, c - k); j <= Math.min(25, c + k); j++) {
      best = Math.max(best, dp[j])
    }
    dp[c] = best + 1
  }
  return Math.max(...dp)
}
