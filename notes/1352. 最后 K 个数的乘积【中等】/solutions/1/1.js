var ProductOfNumbers = function () {
  this.prefix = [1] // 前缀乘积
}

/**
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function (num) {
  if (num === 0) {
    this.prefix = [1]
  } else {
    this.prefix.push(this.prefix[this.prefix.length - 1] * num)
  }
}

/**
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function (k) {
  if (k >= this.prefix.length) return 0
  return (
    this.prefix[this.prefix.length - 1] /
    this.prefix[this.prefix.length - 1 - k]
  )
}
