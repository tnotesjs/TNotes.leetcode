/**
 * @param {number[][]} points
 * @param {string} s
 * @return {number}
 */
var maxPointsInsideSquare = function(points, s) {
  // 对每个标签，找最小的包含该点的正方形边长
  const n = points.length
  // 边长为 side 的正方形: |x| <= side && |y| <= side
  // 对每个点，它所需的最小边长为 max(|x|, |y|)
  const minDist = new Array(26).fill(Infinity) // 每个标签的最小距离
  let secondMin = Infinity // 所有标签中第二小的距离
  for (let i = 0; i < n; i++) {
    const d = Math.max(Math.abs(points[i][0]), Math.abs(points[i][1]))
    const c = s.charCodeAt(i) - 97
    if (d < minDist[c]) {
      secondMin = Math.min(secondMin, minDist[c])
      minDist[c] = d
    } else {
      secondMin = Math.min(secondMin, d)
    }
  }
  let count = 0
  for (let i = 0; i < 26; i++) {
    if (minDist[i] < secondMin) count++
  }
  return count
}
