/*
 * @lc app=leetcode.cn id=812 lang=javascript
 *
 * [812] 最大三角形面积
 */

// @lc code=start
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
        // 使用向量叉积计算三角形面积
        const area = calculateTriangleArea(
          points[i][0],
          points[i][1],
          points[j][0],
          points[j][1],
          points[k][0],
          points[k][1]
        )
        maxArea = Math.max(maxArea, area)
      }
    }
  }

  return maxArea
}

// 使用向量叉积计算三角形面积
// 公式：面积 = 0.5 * |x1(y2-y3) + x2(y3-y1) + x3(y1-y2)|
const calculateTriangleArea = (x1, y1, x2, y2, x3, y3) => {
  return 0.5 * Math.abs(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2))
}
// @lc code=end
