/**
 * @param {number[][]} nums
 * @return {number}
 */
var numberOfPoints = function (nums) {
  const points = new Set()

  for (const [start, end] of nums) {
    for (let i = start; i <= end; i++) {
      points.add(i)
    }
  }

  return points.size
}
