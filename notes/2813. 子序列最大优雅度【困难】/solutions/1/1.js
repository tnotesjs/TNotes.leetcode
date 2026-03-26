/**
 * @param {number[][]} items
 * @param {number} k
 * @return {number}
 */
var findMaximumElegance = function (items, k) {
  items.sort((a, b) => b[0] - a[0])
  let totalProfit = 0
  const seen = new Set()
  const duplicates = []
  for (let i = 0; i < k; i++) {
    totalProfit += items[i][0]
    if (seen.has(items[i][1])) duplicates.push(items[i][0])
    else seen.add(items[i][1])
  }
  let ans = totalProfit + seen.size * seen.size
  for (let i = k; i < items.length; i++) {
    if (seen.has(items[i][1]) || duplicates.length === 0) continue
    totalProfit -= duplicates.pop()
    totalProfit += items[i][0]
    seen.add(items[i][1])
    ans = Math.max(ans, totalProfit + seen.size * seen.size)
  }
  return ans
}
