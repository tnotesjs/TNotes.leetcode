/**
 * @param {number} radius
 * @param {number} x_center
 * @param {number} y_center
 */
var Solution = function (radius, x_center, y_center) {
  this.r = radius
  this.x = x_center
  this.y = y_center
}

/**
 * @return {number[]}
 */
Solution.prototype.randPoint = function () {
  while (true) {
    const x = Math.random() * 2 * this.r - this.r
    const y = Math.random() * 2 * this.r - this.r
    if (x * x + y * y <= this.r * this.r) return [this.x + x, this.y + y]
  }
}
