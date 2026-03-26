/**
 * @param {number[]} maxHeights
 * @return {number}
 */
var maximumSumOfHeights = function (maxHeights) {
  const n = maxHeights.length
  let ans = 0
  for (let i = 0; i < n; i++) {
    let sum = maxHeights[i]
    let cur = maxHeights[i]
    for (let j = i - 1; j >= 0; j--) {
      cur = Math.min(cur, maxHeights[j])
      sum += cur
    }
    cur = maxHeights[i]
    for (let j = i + 1; j < n; j++) {
      cur = Math.min(cur, maxHeights[j])
      sum += cur
    }
    ans = Math.max(ans, sum)
  }
  return ans
}
