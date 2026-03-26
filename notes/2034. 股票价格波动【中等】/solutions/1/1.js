var StockPrice = function () {
  this.map = new Map()
  this.latest = 0
  this.maxH = []
  this.minH = []
}

var hPush = function (h, v, isMax) {
  h.push(v)
  let i = h.length - 1
  while (i > 0) {
    let p = (i - 1) >> 1
    if (isMax ? h[i][0] > h[p][0] : h[i][0] < h[p][0]) {
      ;[h[i], h[p]] = [h[p], h[i]]
      i = p
    } else break
  }
}

var hPop = function (h, isMax) {
  let top = h[0],
    last = h.pop()
  if (h.length) {
    h[0] = last
    let i = 0
    while (true) {
      let s = i,
        l = 2 * i + 1,
        r = 2 * i + 2
      if (l < h.length && (isMax ? h[l][0] > h[s][0] : h[l][0] < h[s][0])) s = l
      if (r < h.length && (isMax ? h[r][0] > h[s][0] : h[r][0] < h[s][0])) s = r
      if (s !== i) {
        ;[h[i], h[s]] = [h[s], h[i]]
        i = s
      } else break
    }
  }
  return top
}

/**
 * @param {number} timestamp
 * @param {number} price
 * @return {void}
 */
StockPrice.prototype.update = function (timestamp, price) {
  this.map.set(timestamp, price)
  if (timestamp >= this.latest) this.latest = timestamp
  hPush(this.maxH, [price, timestamp], true)
  hPush(this.minH, [price, timestamp], false)
}

/**
 * @return {number}
 */
StockPrice.prototype.current = function () {
  return this.map.get(this.latest)
}

/**
 * @return {number}
 */
StockPrice.prototype.maximum = function () {
  while (this.maxH[0][0] !== this.map.get(this.maxH[0][1]))
    hPop(this.maxH, true)
  return this.maxH[0][0]
}

/**
 * @return {number}
 */
StockPrice.prototype.minimum = function () {
  while (this.minH[0][0] !== this.map.get(this.minH[0][1]))
    hPop(this.minH, false)
  return this.minH[0][0]
}
