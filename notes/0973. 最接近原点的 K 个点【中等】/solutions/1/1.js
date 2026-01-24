/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  // 按距离原点的平方从小到大排序（避免开方运算）
  points.sort((a, b) => {
    const distA = a[0] * a[0] + a[1] * a[1]
    const distB = b[0] * b[0] + b[1] * b[1]
    return distA - distB
  })

  // 返回前 k 个点
  return points.slice(0, k)
}
