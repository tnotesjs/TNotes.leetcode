/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
var minimumTime = function (time, totalTrips) {
  let lo = 1
  let hi = Math.min(...time) * totalTrips
  while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2)
    let trips = 0
    for (const t of time) trips += Math.floor(mid / t)
    if (trips >= totalTrips) hi = mid
    else lo = mid + 1
  }
  return lo
}
