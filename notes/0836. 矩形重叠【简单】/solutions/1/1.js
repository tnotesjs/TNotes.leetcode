/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function (rec1, rec2) {
  // 分别获取两个矩形的坐标
  const [x1, y1, x2, y2] = rec1
  const [x3, y3, x4, y4] = rec2

  // 判断在x轴和y轴上的投影是否都重叠
  const overlapX = Math.min(x2, x4) > Math.max(x1, x3)
  const overlapY = Math.min(y2, y4) > Math.max(y1, y3)

  // 两个投影都重叠时，矩形才重叠
  return overlapX && overlapY
}
