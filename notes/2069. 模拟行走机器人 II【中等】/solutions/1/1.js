/**
 * @param {number} width
 * @param {number} height
 */
var Robot = function (width, height) {
  this.w = width
  this.h = height
  this.perimeter = 2 * (width + height - 2)
  this.pos = 0
  this.moved = false
}

/**
 * @param {number} num
 * @return {void}
 */
Robot.prototype.step = function (num) {
  this.moved = true
  this.pos = (this.pos + num) % this.perimeter
}

/**
 * @return {number[]}
 */
Robot.prototype.getPos = function () {
  let p = this.pos
  if (p < this.w) return [p, 0]
  p -= this.w - 1
  if (p < this.h) return [this.w - 1, p]
  p -= this.h - 1
  if (p < this.w) return [this.w - 1 - p, this.h - 1]
  p -= this.w - 1
  return [0, this.h - 1 - p]
}

/**
 * @return {string}
 */
Robot.prototype.getDir = function () {
  if (!this.moved) return 'East'
  let p = this.pos
  if (p === 0) return 'South'
  if (p < this.w) return 'East'
  p -= this.w - 1
  if (p < this.h) return 'North'
  p -= this.h - 1
  if (p < this.w) return 'West'
  return 'South'
}
