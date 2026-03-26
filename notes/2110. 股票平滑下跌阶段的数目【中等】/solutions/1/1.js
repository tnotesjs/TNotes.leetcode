/**
 * @param {number[]} prices
 * @return {number}
 */
var getDescentPeriods = function (prices) {
  let res = 0,
    count = 1
  for (let i = 0; i < prices.length; i++) {
    if (i > 0 && prices[i - 1] - prices[i] === 1) {
      count++
    } else {
      count = 1
    }
    res += count
  }
  return res
}
