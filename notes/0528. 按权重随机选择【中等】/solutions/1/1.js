/**
 * @param {number[]} w
 */
var Solution = function (w) {
  this.prefix = []
  let sum = 0
  for (const val of w) {
    sum += val
    this.prefix.push(sum)
  }
  this.total = sum
}

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
  const target = Math.floor(Math.random() * this.total) + 1
  let lo = 0,
    hi = this.prefix.length - 1
  while (lo < hi) {
    const mid = (lo + hi) >> 1
    if (this.prefix[mid] < target) lo = mid + 1
    else hi = mid
  }
  return lo
}
