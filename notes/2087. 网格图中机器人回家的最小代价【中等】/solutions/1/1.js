/**
 * @param {number} startPos
 * @param {number} homePos
 * @param {number[]} rowCosts
 * @param {number[]} colCosts
 * @return {number}
 */
var minCost = function (startPos, homePos, rowCosts, colCosts) {
  let cost = 0
  const [sr, sc] = startPos
  const [hr, hc] = homePos
  const rDir = sr < hr ? 1 : -1
  for (let r = sr + rDir; r !== hr + rDir; r += rDir) {
    cost += rowCosts[r]
  }
  const cDir = sc < hc ? 1 : -1
  for (let c = sc + cDir; c !== hc + cDir; c += cDir) {
    cost += colCosts[c]
  }
  return cost
}
