/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function (x, y, points) {
  let bestDist = Infinity
  let bestIdx = -1

  for (let i = 0; i < points.length; i += 1) {
    const [px, py] = points[i]

    // 跳过无效点
    if (px !== x && py !== y) continue

    // 计算曼哈顿距离（Manhattan Distance）
    const dist = Math.abs(px - x) + Math.abs(py - y)

    // 更新最优解
    if (dist < bestDist) {
      bestDist = dist
      bestIdx = i
    }
  }

  return bestIdx
}
