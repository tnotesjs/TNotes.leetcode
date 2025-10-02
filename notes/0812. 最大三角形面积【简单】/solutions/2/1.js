/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function (points) {
  const n = points.length
  let maxArea = 0

  // 枚举所有可能的三个点的组合
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        const area = calculateTriangleAreaByHeron(
          points[i],
          points[j],
          points[k]
        )
        maxArea = Math.max(maxArea, area)
      }
    }
  }

  return maxArea
}

// 使用海伦公式计算三角形面积
// 公式：面积 = sqrt(s*(s-a)*(s-b)*(s-c))，其中s为半周长
const calculateTriangleAreaByHeron = (p1, p2, p3) => {
  // 计算三边长度
  const a = Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2))
  const b = Math.sqrt(Math.pow(p2[0] - p3[0], 2) + Math.pow(p2[1] - p3[1], 2))
  const c = Math.sqrt(Math.pow(p3[0] - p1[0], 2) + Math.pow(p3[1] - p1[1], 2))

  // 计算半周长
  const s = (a + b + c) / 2

  // 计算面积

  // ❌ 错误写法：
  // return Math.sqrt(s * (s - a) * (s - b) * (s - c))

  // ✅ 正确写法：
  const val = s * (s - a) * (s - b) * (s - c)
  return Math.sqrt(Math.max(0, val))
}
