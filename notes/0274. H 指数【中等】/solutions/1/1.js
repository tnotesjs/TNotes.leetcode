/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  const n = citations.length
  const count = new Array(n + 1).fill(0)
  for (const c of citations) {
    count[Math.min(c, n)]++
  }
  let total = 0
  for (let i = n; i >= 0; i--) {
    total += count[i]
    if (total >= i) return i
  }
  return 0
}
