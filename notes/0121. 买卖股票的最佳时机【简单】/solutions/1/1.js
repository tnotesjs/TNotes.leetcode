/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minPrice = Infinity // 记录最低价格
  let maxProfit = 0 // 记录最大利润

  for (let price of prices) {
    // 更新最低价格
    minPrice = Math.min(minPrice, price)
    // 更新最大利润（当前价格减去之前最低价格）
    maxProfit = Math.max(maxProfit, price - minPrice)
  }

  return maxProfit
}
