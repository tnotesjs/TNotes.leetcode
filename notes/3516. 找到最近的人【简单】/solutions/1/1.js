/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function (x, y, z) {
  // 计算两人到第 3 个人的距离
  const dist1 = Math.abs(x - z)
  const dist2 = Math.abs(y - z)

  if (dist1 < dist2) return 1
  if (dist2 < dist1) return 2
  return 0
}
