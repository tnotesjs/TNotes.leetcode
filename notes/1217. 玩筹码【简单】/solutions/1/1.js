/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function (position) {
  let even = 0
  let odd = 0

  // 统计在偶数位置和奇数位置的筹码数量
  for (const p of position) {
    if (p % 2 === 0) even += 1
    else odd += 1
  }

  // 返回较小的数量（因为可以将较少的一方移动到较多的一方的位置）
  return Math.min(even, odd)
}
