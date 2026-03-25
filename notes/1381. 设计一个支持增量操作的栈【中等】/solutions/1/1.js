/**
 * @param {number} maxSize
 */
var CustomStack = function (maxSize) {
  this.maxSize = maxSize
  this.stack = []
  this.inc = new Array(maxSize).fill(0)
}

/**
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function (x) {
  if (this.stack.length < this.maxSize) this.stack.push(x)
}

/**
 * @return {number}
 */
CustomStack.prototype.pop = function () {
  const i = this.stack.length - 1
  if (i < 0) return -1
  const val = this.stack.pop() + this.inc[i]
  if (i > 0) this.inc[i - 1] += this.inc[i]
  this.inc[i] = 0
  return val
}

/**
 * @param {number} k
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function (k, val) {
  const idx = Math.min(k, this.stack.length) - 1
  if (idx >= 0) this.inc[idx] += val
}
