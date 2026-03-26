/**
 * @param {number[][]} stockPrices
 * @return {number}
 */
var minimumLines = function (stockPrices) {
  stockPrices.sort((a, b) => a[0] - b[0])
  const n = stockPrices.length
  if (n <= 1) return 0
  let res = 1
  for (let i = 2; i < n; i++) {
    const dx1 = stockPrices[i][0] - stockPrices[i - 1][0]
    const dy1 = stockPrices[i][1] - stockPrices[i - 1][1]
    const dx2 = stockPrices[i - 1][0] - stockPrices[i - 2][0]
    const dy2 = stockPrices[i - 1][1] - stockPrices[i - 2][1]
    // 用交叉乘法避免浮点误差
    if (BigInt(dy1) * BigInt(dx2) !== BigInt(dy2) * BigInt(dx1)) res++
  }
  return res
}
