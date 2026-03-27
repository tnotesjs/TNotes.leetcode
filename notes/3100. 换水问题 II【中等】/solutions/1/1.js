/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var maxBottlesDrunk = function(numBottles, numExchange) {
  let drunk = numBottles
  let empty = numBottles
  while (empty >= numExchange) {
    empty -= numExchange
    drunk++
    empty++ // 喝完后又多一个空瓶
    numExchange++
  }
  return drunk
}
