/**
 * @param {number[][]} points
 * @param {number} w
 * @return {number}
 */
var minRectanglesToCoverPoints = function(points, w) {
  // 只关心 x 坐标
  const xs = points.map(p => p[0]).sort((a, b) => a - b)
  let count = 0
  let i = 0
  while (i < xs.length) {
    const start = xs[i]
    count++
    while (i < xs.length && xs[i] <= start + w) i++
  }
  return count
}
