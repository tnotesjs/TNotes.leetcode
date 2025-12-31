/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
  let empty = numBottles
  let total = numBottles

  while (empty >= numExchange) {
    const newBottles = Math.floor(empty / numExchange)
    total += newBottles
    empty = newBottles + (empty % numExchange)
  }

  return total
}
