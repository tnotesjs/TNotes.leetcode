/**
 * @param {number} total
 * @param {number} cost1
 * @param {number} cost2
 * @return {number}
 */
var waysToBuyPensPencils = function (total, cost1, cost2) {
  let count = 0
  for (let pens = 0; pens * cost1 <= total; pens++) {
    const remaining = total - pens * cost1
    count += Math.floor(remaining / cost2) + 1
  }
  return count
}
