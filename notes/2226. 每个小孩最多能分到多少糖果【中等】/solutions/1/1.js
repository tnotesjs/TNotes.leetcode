/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
var maximumCandies = function (candies, k) {
  let lo = 0,
    hi = Math.max(...candies)
  while (lo < hi) {
    const mid = Math.floor((lo + hi + 1) / 2)
    let count = 0
    for (const c of candies) {
      count += Math.floor(c / mid)
    }
    if (count >= k) lo = mid
    else hi = mid - 1
  }
  return lo
}
