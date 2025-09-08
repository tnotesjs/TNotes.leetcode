/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minPrice = Infinity // 记录截止目前为止的最低价格
  let maxProfit = 0 // 记录最大利润

  for (let price of prices) {
    // 更新最低价格
    minPrice = Math.min(minPrice, price)
    // 更新最大利润（当前价格减去之前最低价格）
    maxProfit = Math.max(maxProfit, price - minPrice)
  }

  return maxProfit
}
// @lc code=end
