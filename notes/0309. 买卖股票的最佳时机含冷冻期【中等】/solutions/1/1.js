/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const n = prices.length
  if (n === 0) return 0
  let hold = -prices[0],
    sold = 0,
    rest = 0
  for (let i = 1; i < n; i++) {
    const prevSold = sold
    sold = hold + prices[i]
    hold = Math.max(hold, rest - prices[i])
    rest = Math.max(rest, prevSold)
  }
  return Math.max(sold, rest)
}
