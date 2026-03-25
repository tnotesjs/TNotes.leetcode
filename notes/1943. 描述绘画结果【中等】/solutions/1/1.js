/**
 * @param {number[][]} segments
 * @return {number[][]}
 */
var splitPainting = function (segments) {
  const events = new Map()
  for (const [l, r, c] of segments) {
    events.set(l, (events.get(l) || 0) + c)
    events.set(r, (events.get(r) || 0) - c)
  }
  const points = [...events.keys()].sort((a, b) => a - b)
  const res = []
  let sum = 0
  for (let i = 0; i < points.length - 1; i++) {
    sum += events.get(points[i])
    if (sum > 0) res.push([points[i], points[i + 1], sum])
  }
  return res
}
