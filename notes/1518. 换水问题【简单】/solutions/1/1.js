/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
  let empty = numBottles
  let total = numBottles

  // 当空瓶数量大于等于兑换所需空瓶数量时，继续兑换
  while (empty >= numExchange) {
    // 计算可以兑换的新瓶数量
    const newBottles = Math.floor(empty / numExchange)
    total += newBottles
    // 更新空瓶数量：新瓶喝完后变为空瓶，加上兑换后剩余的空瓶
    empty = newBottles + (empty % numExchange)
  }

  return total
}
