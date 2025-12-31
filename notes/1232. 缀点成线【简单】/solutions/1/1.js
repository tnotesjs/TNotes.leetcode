/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  const [x0, y0] = coordinates[0]
  const [x1, y1] = coordinates[1]
  const dx = x1 - x0
  const dy = y1 - y0

  for (let i = 2; i < coordinates.length; i += 1) {
    const [x, y] = coordinates[i]
    // 叉积为 0 表示共线
    if (dx * (y - y0) - dy * (x - x0) !== 0) return false
  }

  return true
}
