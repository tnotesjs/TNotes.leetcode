/**
 * @param {number} n
 * @param {number} discount
 * @param {number[]} products
 * @param {number[]} prices
 */
var Cashier = function (n, discount, products, prices) {
  this.n = n
  this.discount = discount
  this.count = 0
  this.priceMap = new Map()
  for (let i = 0; i < products.length; i++) {
    this.priceMap.set(products[i], prices[i])
  }
}

/**
 * @param {number[]} product
 * @param {number[]} amount
 * @return {number}
 */
Cashier.prototype.getBill = function (product, amount) {
  this.count++
  let total = 0
  for (let i = 0; i < product.length; i++) {
    total += this.priceMap.get(product[i]) * amount[i]
  }
  if (this.count % this.n === 0) {
    total -= (this.discount * total) / 100
  }
  return total
}
