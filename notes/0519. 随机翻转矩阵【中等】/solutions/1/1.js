/**
 * @param {number} m
 * @param {number} n
 */
var Solution = function (m, n) {
  this.m = m
  this.n = n
  this.total = m * n
  this.map = new Map()
}

/**
 * @return {number[]}
 */
Solution.prototype.flip = function () {
  const rand = Math.floor(Math.random() * this.total)
  this.total--
  const val = this.map.get(rand) ?? rand
  this.map.set(rand, this.map.get(this.total) ?? this.total)
  return [Math.floor(val / this.n), val % this.n]
}

Solution.prototype.reset = function () {
  this.total = this.m * this.n
  this.map.clear()
}
