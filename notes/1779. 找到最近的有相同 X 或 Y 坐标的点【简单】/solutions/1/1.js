/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function (x, y, points) {
  let bestDist = Infinity
  let bestIdx = -1

  for (let i = 0; i < points.length; i += 1) {
    const [px, py] = points[i]
    if (px !== x && py !== y) continue
    const dist = Math.abs(px - x) + Math.abs(py - y)
    if (dist < bestDist) {
      bestDist = dist
      bestIdx = i
    }
  }

  return bestIdx
}
