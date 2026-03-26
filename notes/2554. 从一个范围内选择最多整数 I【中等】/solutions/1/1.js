/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
var maxCount = function (banned, n, maxSum) {
  const set = new Set(banned)
  let sum = 0, cnt = 0
  for (let i = 1; i <= n; i++) {
    if (set.has(i)) continue
    if (sum + i > maxSum) break
    sum += i
    cnt++
  }
  return cnt
}
