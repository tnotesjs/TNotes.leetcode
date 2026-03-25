/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
  let left = Math.max(...weights)
  let right = weights.reduce((a, b) => a + b, 0)
  while (left < right) {
    const mid = (left + right) >> 1
    let need = 1
    let cur = 0
    for (const w of weights) {
      if (cur + w > mid) {
        need++
        cur = 0
      }
      cur += w
    }
    if (need <= days) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  return left
}
