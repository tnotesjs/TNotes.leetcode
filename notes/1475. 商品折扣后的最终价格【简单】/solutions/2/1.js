/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  const n = prices.length
  const res = new Array(n)
  const stack = [] // 单调非降栈，存储后缀的候选折扣价

  for (let i = n - 1; i >= 0; i--) {
    const price = prices[i]
    // 栈顶若大于当前价，不能作为折扣，弹出
    while (stack.length && stack[stack.length - 1] > price) stack.pop()
    const discount = stack.length ? stack[stack.length - 1] : 0
    res[i] = price - discount
    // 当前价入栈，供左侧商品使用
    stack.push(price)
  }
  return res
}
