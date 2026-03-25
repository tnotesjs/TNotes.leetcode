/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function (intervals) {
  // 按左端点升序，左端点相同时按右端点降序
  intervals.sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : b[1] - a[1]))
  let count = 0,
    maxRight = 0
  for (const [, right] of intervals) {
    if (right > maxRight) {
      count++
      maxRight = right
    }
  }
  return count
}
