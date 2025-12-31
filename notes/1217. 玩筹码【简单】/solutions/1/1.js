/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function (position) {
  let even = 0
  let odd = 0

  for (const p of position) {
    if (p % 2 === 0) {
      even += 1
    } else {
      odd += 1
    }
  }

  return Math.min(even, odd)
}
