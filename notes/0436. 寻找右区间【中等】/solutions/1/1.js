/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function (intervals) {
  const sorted = intervals.map((v, i) => [v[0], i]).sort((a, b) => a[0] - b[0])
  return intervals.map(([, end]) => {
    let lo = 0,
      hi = sorted.length
    while (lo < hi) {
      const mid = (lo + hi) >> 1
      if (sorted[mid][0] >= end) hi = mid
      else lo = mid + 1
    }
    return lo < sorted.length ? sorted[lo][1] : -1
  })
}
