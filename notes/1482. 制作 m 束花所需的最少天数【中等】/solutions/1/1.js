/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function (bloomDay, m, k) {
  if (m * k > bloomDay.length) return -1
  const canMake = (day) => {
    let bouquets = 0,
      flowers = 0
    for (const b of bloomDay) {
      if (b <= day) {
        if (++flowers === k) {
          bouquets++
          flowers = 0
        }
      } else flowers = 0
    }
    return bouquets >= m
  }
  let lo = 1,
    hi = Math.max(...bloomDay)
  while (lo < hi) {
    const mid = (lo + hi) >> 1
    if (canMake(mid)) hi = mid
    else lo = mid + 1
  }
  return lo
}
