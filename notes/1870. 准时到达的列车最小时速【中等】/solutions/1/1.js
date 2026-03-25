/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
var minSpeedOnTime = function (dist, hour) {
  const n = dist.length
  if (hour <= n - 1) return -1
  let lo = 1,
    hi = 1e7
  while (lo < hi) {
    const mid = (lo + hi) >> 1
    let time = 0
    for (let i = 0; i < n - 1; i++) {
      time += Math.ceil(dist[i] / mid)
    }
    time += dist[n - 1] / mid
    if (time <= hour) hi = mid
    else lo = mid + 1
  }
  return lo
}
