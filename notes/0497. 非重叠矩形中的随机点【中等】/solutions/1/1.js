/**
 * @param {number[][]} rects
 */
var Solution = function (rects) {
  this.rects = rects
  this.prefix = []
  let sum = 0
  for (const [a, b, x, y] of rects) {
    sum += (x - a + 1) * (y - b + 1)
    this.prefix.push(sum)
  }
  this.total = sum
}

/**
 * @return {number[]}
 */
Solution.prototype.pick = function () {
  const target = Math.floor(Math.random() * this.total) + 1
  let lo = 0,
    hi = this.prefix.length - 1
  while (lo < hi) {
    const mid = (lo + hi) >> 1
    if (this.prefix[mid] < target) lo = mid + 1
    else hi = mid
  }
  const [a, b, x, y] = this.rects[lo]
  const w = x - a + 1
  const offset = target - (lo > 0 ? this.prefix[lo - 1] : 0) - 1
  return [a + (offset % w), b + Math.floor(offset / w)]
}
