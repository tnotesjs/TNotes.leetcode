/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function (points) {
  const [x1, y1] = points[0]
  const [x2, y2] = points[1]
  const [x3, y3] = points[2]

  // 检查三点是否共线
  // 判断斜率是否相等，避免除法
  return (y2 - y1) * (x3 - x2) !== (y3 - y2) * (x2 - x1)
}
