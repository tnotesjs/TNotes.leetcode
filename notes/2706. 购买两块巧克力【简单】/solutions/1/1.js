/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function (prices, money) {
  let min1 = Infinity,
    min2 = Infinity

  // 找出最小的两个价格
  for (const price of prices) {
    if (price < min1) {
      min2 = min1
      min1 = price
    } else if (price < min2) {
      min2 = price
    }
  }

  const cost = min1 + min2
  return cost <= money ? money - cost : money
}
