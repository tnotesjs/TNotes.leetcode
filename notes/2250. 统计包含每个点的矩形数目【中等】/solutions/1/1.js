/**
 * @param {number[][]} rectangles
 * @param {number[][]} points
 * @return {number[]}
 */
var countRectangles = function (rectangles, points) {
  // 按高度分组，每组存排序后的 x 坐标
  const byHeight = new Array(101).fill(null).map(() => [])
  for (const [l, h] of rectangles) {
    byHeight[h].push(l)
  }
  for (let h = 0; h <= 100; h++) byHeight[h].sort((a, b) => a - b)
  const bisectLeft = (arr, target) => {
    let lo = 0,
      hi = arr.length
    while (lo < hi) {
      const mid = (lo + hi) >> 1
      if (arr[mid] < target) lo = mid + 1
      else hi = mid
    }
    return lo
  }
  return points.map(([px, py]) => {
    let count = 0
    for (let h = py; h <= 100; h++) {
      const arr = byHeight[h]
      count += arr.length - bisectLeft(arr, px)
    }
    return count
  })
}
