/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var minimumSum = function(n, k) {
  const m = Math.min(n, Math.floor((k - 1) / 2))
  const rem = n - m
  return m * (m + 1) / 2 + rem * k + rem * (rem - 1) / 2
}
