/**
 * @param {number} limit
 * @param {number[][]} queries
 * @return {number[]}
 */
var queryResults = function(limit, queries) {
  const ballColor = new Map() // 球 -> 颜色
  const colorCount = new Map() // 颜色 -> 计数
  const res = []
  for (const [ball, color] of queries) {
    if (ballColor.has(ball)) {
      const oldColor = ballColor.get(ball)
      const cnt = colorCount.get(oldColor) - 1
      if (cnt === 0) colorCount.delete(oldColor)
      else colorCount.set(oldColor, cnt)
    }
    ballColor.set(ball, color)
    colorCount.set(color, (colorCount.get(color) || 0) + 1)
    res.push(colorCount.size)
  }
  return res
}
