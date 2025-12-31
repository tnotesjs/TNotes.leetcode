/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points) {
  let time = 0

  for (let i = 1; i < points.length; i += 1) {
    const [x0, y0] = points[i - 1]
    const [x1, y1] = points[i]
    const dx = Math.abs(x1 - x0)
    const dy = Math.abs(y1 - y0)
    time += Math.max(dx, dy)
  }

  return time
}
