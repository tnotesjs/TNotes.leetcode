/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function (rec1, rec2) {
  // 分别获取两个矩形的坐标
  const [x1, y1, x2, y2] = rec1
  const [x3, y3, x4, y4] = rec2

  // 判断是否不重叠的情况
  // 一个矩形在另一个矩形的左侧、右侧、上方或下方
  if (x2 <= x3 || x4 <= x1 || y2 <= y3 || y4 <= y1) {
    return false
  }

  // 排除不重叠的情况后，就是重叠的情况
  return true
}
