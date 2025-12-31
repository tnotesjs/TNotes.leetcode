/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function (rectangles) {
  let best = 0
  let cnt = 0

  // 对每个矩形，能形成的最大正方形边长是其短边
  for (const [l, w] of rectangles) {
    const side = Math.min(l, w)
    if (side > best) {
      best = side
      cnt = 1
    } else if (side === best) {
      cnt += 1
    }
  }

  return cnt
}
