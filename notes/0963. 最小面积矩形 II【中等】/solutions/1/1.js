/**
 * @param {number[][]} points
 * @return {number}
 */
var minAreaFreeRect = function (points) {
  const n = points.length
  if (n < 4) return 0

  // 用哈希表存储每条对角线的中点和长度
  const map = new Map()

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const [x1, y1] = points[i]
      const [x2, y2] = points[j]

      // 对角线中点（用2倍坐标避免浮点数）
      const cx = x1 + x2
      const cy = y1 + y2
      // 对角线长度的平方
      const dist = (x1 - x2) ** 2 + (y1 - y2) ** 2

      const key = `${cx},${cy},${dist}`
      if (!map.has(key)) map.set(key, [])
      map.get(key).push([i, j])
    }
  }

  let minArea = Infinity

  // 检查每组共享中点和对角线长度的点对
  for (const pairs of map.values()) {
    if (pairs.length < 2) continue

    for (let i = 0; i < pairs.length; i++) {
      for (let j = i + 1; j < pairs.length; j++) {
        const [p1, p2] = pairs[i] // 对角线1的两端点索引
        const [p3, p4] = pairs[j] // 对角线2的两端点索引

        const [x1, y1] = points[p1]
        const [x3, y3] = points[p3]
        const [x4, y4] = points[p4]

        // 从 p1 出发到 p3 和 p4 的两条边
        const v1x = x3 - x1,
          v1y = y3 - y1
        const v2x = x4 - x1,
          v2y = y4 - y1

        // 检查是否垂直（向量点积为0）
        if (v1x * v2x + v1y * v2y === 0) {
          const len1 = Math.sqrt(v1x ** 2 + v1y ** 2)
          const len2 = Math.sqrt(v2x ** 2 + v2y ** 2)
          minArea = Math.min(minArea, len1 * len2)
        }
      }
    }
  }

  return minArea === Infinity ? 0 : minArea
}
