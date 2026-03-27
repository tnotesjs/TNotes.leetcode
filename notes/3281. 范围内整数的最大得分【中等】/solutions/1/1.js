/**
 * @param {number[]} start
 * @param {number} d
 * @return {number}
 */
var maxPossibleScore = function(start, d) {
  const n = start.length
  const sorted = start.slice().sort((a, b) => a - b)
  // 二分答案 mid：能否让相邻选的数差 >= mid
  let lo = 0, hi = (sorted[n - 1] + d - sorted[0]) / (n - 1) + 1
  hi = Math.floor(hi) + 1
  const check = (mid) => {
    let prev = sorted[0]
    for (let i = 1; i < n; i++) {
      const next = Math.max(prev + mid, sorted[i])
      if (next > sorted[i] + d) return false
      prev = next
    }
    return true
  }
  // 二分 BigInt 以避免精度问题
  let left = 0n, right = BigInt(hi)
  while (left < right) {
    const m = (left + right + 1n) / 2n
    if (check(Number(m))) left = m
    else right = m - 1n
  }
  return Number(left)
}
