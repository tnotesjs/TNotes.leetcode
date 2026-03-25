/**
 * @param {number[][]} orders
 * @return {number}
 */
var getNumberOfBacklogOrders = function (orders) {
  const MOD = 1e9 + 7
  const buy = [] // 最大堆 [-price, amount]
  const sell = [] // 最小堆 [price, amount]
  const pushHeap = (h, v, cmp) => {
    h.push(v)
    let i = h.length - 1
    while (i > 0) {
      const p = (i - 1) >> 1
      if (cmp(h[p], h[i]) > 0) {
        ;[h[p], h[i]] = [h[i], h[p]]
        i = p
      } else break
    }
  }
  const popHeap = (h, cmp) => {
    if (h.length === 1) return h.pop()
    const top = h[0]
    h[0] = h.pop()
    let i = 0
    while (true) {
      let m = i,
        l = 2 * i + 1,
        r = 2 * i + 2
      if (l < h.length && cmp(h[l], h[m]) < 0) m = l
      if (r < h.length && cmp(h[r], h[m]) < 0) m = r
      if (m === i) break
      ;[h[i], h[m]] = [h[m], h[i]]
      i = m
    }
    return top
  }
  const cmpMin = (a, b) => a[0] - b[0]
  const cmpMax = (a, b) => a[0] - b[0] // buy 存负值

  for (const [price, amount, type] of orders) {
    let amt = amount
    if (type === 0) {
      // buy
      while (amt > 0 && sell.length > 0 && sell[0][0] <= price) {
        const top = sell[0]
        const deal = Math.min(amt, top[1])
        amt -= deal
        top[1] -= deal
        if (top[1] === 0) popHeap(sell, cmpMin)
      }
      if (amt > 0) pushHeap(buy, [-price, amt], cmpMax)
    } else {
      // sell
      while (amt > 0 && buy.length > 0 && -buy[0][0] >= price) {
        const top = buy[0]
        const deal = Math.min(amt, top[1])
        amt -= deal
        top[1] -= deal
        if (top[1] === 0) popHeap(buy, cmpMax)
      }
      if (amt > 0) pushHeap(sell, [price, amt], cmpMin)
    }
  }
  let total = 0
  for (const [, a] of buy) total = (total + a) % MOD
  for (const [, a] of sell) total = (total + a) % MOD
  return total
}
