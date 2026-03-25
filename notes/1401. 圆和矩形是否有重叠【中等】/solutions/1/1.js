/**
 * @param {number} radius
 * @param {number} xCenter
 * @param {number} yCenter
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {boolean}
 */
var checkOverlap = function (radius, xCenter, yCenter, x1, y1, x2, y2) {
  // 找矩形上离圆心最近的点
  const cx = Math.max(x1, Math.min(xCenter, x2))
  const cy = Math.max(y1, Math.min(yCenter, y2))
  const dx = xCenter - cx
  const dy = yCenter - cy
  return dx * dx + dy * dy <= radius * radius
}
