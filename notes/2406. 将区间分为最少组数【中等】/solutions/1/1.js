/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minGroups = function (intervals) {
  const events = []
  for (const [l, r] of intervals) {
    events.push([l, 1])
    events.push([r + 1, -1])
  }
  events.sort((a, b) => a[0] - b[0] || a[1] - b[1])
  let cur = 0,
    ans = 0
  for (const [, delta] of events) {
    cur += delta
    ans = Math.max(ans, cur)
  }
  return ans
}
