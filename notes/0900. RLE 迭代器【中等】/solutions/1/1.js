/**
 * @param {number[]} encoding
 */
var RLEIterator = function (encoding) {
  this.encoding = encoding
  this.idx = 0
}

/**
 * @param {number} n
 * @return {number}
 */
RLEIterator.prototype.next = function (n) {
  while (this.idx < this.encoding.length) {
    if (this.encoding[this.idx] >= n) {
      this.encoding[this.idx] -= n
      return this.encoding[this.idx + 1]
    }
    n -= this.encoding[this.idx]
    this.idx += 2
  }
  return -1
}
