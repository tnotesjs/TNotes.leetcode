/**
 * @param {number} value
 * @param {number} k
 */
var DataStream = function (value, k) {
  this.value = value
  this.k = k
  this.count = 0
}

/**
 * @param {number} num
 * @return {boolean}
 */
DataStream.prototype.consec = function (num) {
  if (num === this.value) this.count++
  else this.count = 0
  return this.count >= this.k
}
