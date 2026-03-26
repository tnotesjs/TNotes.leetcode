var DetectSquares = function () {
  this.cnt = new Map()
  this.pts = []
}

/**
 * @param {number[]} point
 * @return {void}
 */
DetectSquares.prototype.add = function (point) {
  const key = point[0] * 1001 + point[1]
  this.cnt.set(key, (this.cnt.get(key) || 0) + 1)
  this.pts.push(point)
}

/**
 * @param {number[]} point
 * @return {number}
 */
DetectSquares.prototype.count = function (point) {
  const [x1, y1] = point
  let ans = 0
  for (const [x3, y3] of this.pts) {
    if (Math.abs(x3 - x1) !== Math.abs(y3 - y1) || x3 === x1) continue
    ans +=
      (this.cnt.get(x1 * 1001 + y3) || 0) * (this.cnt.get(x3 * 1001 + y1) || 0)
  }
  return ans
}
