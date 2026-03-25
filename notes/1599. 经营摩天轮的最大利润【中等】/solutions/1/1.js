/**
 * @param {number[]} customers
 * @param {number} boardingCost
 * @param {number} runningCost
 * @return {number}
 */
var minOperationsMaxProfit = function (customers, boardingCost, runningCost) {
  let waiting = 0,
    profit = 0,
    maxProfit = 0,
    bestRot = -1,
    rot = 0
  let i = 0
  while (i < customers.length || waiting > 0) {
    if (i < customers.length) waiting += customers[i]
    const board = Math.min(waiting, 4)
    waiting -= board
    rot++
    profit += board * boardingCost - runningCost
    if (profit > maxProfit) {
      maxProfit = profit
      bestRot = rot
    }
    i++
  }
  return bestRot
}
