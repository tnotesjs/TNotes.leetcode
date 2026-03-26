/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} fx
 * @param {number} fy
 * @param {number} t
 * @return {boolean}
 */
var isReachableAtTime = function(sx, sy, fx, fy, t) {
  const dx = Math.abs(sx - fx), dy = Math.abs(sy - fy)
  if (dx === 0 && dy === 0) return t !== 1
  return t >= Math.max(dx, dy)
}
