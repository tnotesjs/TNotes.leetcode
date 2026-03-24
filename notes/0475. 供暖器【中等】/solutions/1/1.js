/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function (houses, heaters) {
  heaters.sort((a, b) => a - b)
  let res = 0
  for (const h of houses) {
    // 二分查找最近的供暖器
    let lo = 0,
      hi = heaters.length - 1
    while (lo < hi) {
      const mid = (lo + hi) >> 1
      if (heaters[mid] < h) lo = mid + 1
      else hi = mid
    }
    let dist = Math.abs(heaters[lo] - h)
    if (lo > 0) dist = Math.min(dist, Math.abs(heaters[lo - 1] - h))
    res = Math.max(res, dist)
  }
  return res
}
