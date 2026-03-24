/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[1] - b[1])
  let count = 0,
    end = -Infinity
  for (const [s, e] of intervals) {
    if (s >= end) end = e
    else count++
  }
  return count
}
