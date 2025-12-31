/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let cur = 0
  let best = 0

  // 累加净海拔差，记录最高值
  for (const g of gain) {
    cur += g
    if (cur > best) best = cur
  }

  return best
}
