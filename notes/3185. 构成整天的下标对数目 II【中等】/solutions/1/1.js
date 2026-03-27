/**
 * @param {number[]} hours
 * @return {number}
 */
var countCompleteDayPairs = function(hours) {
  const cnt = new Array(24).fill(0)
  let count = 0
  for (const h of hours) {
    const r = h % 24
    const complement = (24 - r) % 24
    count += cnt[complement]
    cnt[r]++
  }
  return count
}
