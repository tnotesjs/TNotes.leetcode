/**
 * @param {number[][]} events
 * @return {number}
 */
var maxTwoEvents = function (events) {
  events.sort((a, b) => a[1] - b[1])
  const n = events.length
  const maxVal = new Array(n)
  maxVal[0] = events[0][2]
  for (let i = 1; i < n; i++) {
    maxVal[i] = Math.max(maxVal[i - 1], events[i][2])
  }
  let ans = maxVal[n - 1]
  for (let i = 0; i < n; i++) {
    const start = events[i][0]
    // 二分查找结束时间 < start 的最后一个事件
    let lo = 0,
      hi = i - 1,
      pos = -1
    while (lo <= hi) {
      const mid = (lo + hi) >> 1
      if (events[mid][1] < start) {
        pos = mid
        lo = mid + 1
      } else {
        hi = mid - 1
      }
    }
    const cur = events[i][2] + (pos >= 0 ? maxVal[pos] : 0)
    ans = Math.max(ans, cur)
  }
  return ans
}
