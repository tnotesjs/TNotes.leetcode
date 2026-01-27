/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  if (coordinates.length <= 2) return true

  const [x1, y1] = coordinates[0]
  const [x2, y2] = coordinates[1]

  // 使用前两个点计算直线的斜率
  // 为了避免除法和除零错误，使用交叉相乘比较
  for (let i = 2; i < coordinates.length; i++) {
    const [x, y] = coordinates[i]

    // 检查 (y2-y1)/(x2-x1) 是否等于 (y-y1)/(x-x1)
    // 即检查 (y2-y1) * (x-x1) 是否等于 (y-y1) * (x2-x1)
    if ((y2 - y1) * (x - x1) !== (y - y1) * (x2 - x1)) return false
  }

  return true
}
