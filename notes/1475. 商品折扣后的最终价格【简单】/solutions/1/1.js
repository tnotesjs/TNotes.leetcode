/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  const result = []

  for (let i = 0; i < prices.length; i++) {
    let discount = 0 // 默认折扣为0

    // 从当前元素的下一个位置开始查找折扣
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] <= prices[i]) {
        discount = prices[j] // 找到第一个符合条件的折扣
        break
      }
    }

    // 计算最终价格
    result.push(prices[i] - discount)
  }

  return result
}
