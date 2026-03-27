/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfPairs = function(points) {
  // 按 x 升序，x 相同按 y 降序
  points.sort((a, b) => a[0] - b[0] || b[1] - a[1])
  const n = points.length
  let ans = 0
  for (let i = 0; i < n; i++) {
    // Alice 在 points[i]（左上角）
    let maxY = -Infinity
    for (let j = i + 1; j < n; j++) {
      // Bob 在 points[j]（右下角）
      // 要求 points[j][1] <= points[i][1]
      if (points[j][1] <= points[i][1] && points[j][1] > maxY) {
        ans++
        maxY = points[j][1]
      }
    }
  }
  return ans
}
