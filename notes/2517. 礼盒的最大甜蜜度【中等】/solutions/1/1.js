/**
 * @param {number[]} price
 * @param {number} k
 * @return {number}
 */
var maximumTastiness = function (price, k) {
  price.sort((a, b) => a - b)
  let lo = 0,
    hi = price[price.length - 1] - price[0]
  while (lo < hi) {
    const mid = Math.floor((lo + hi + 1) / 2)
    let count = 1,
      prev = price[0]
    for (let i = 1; i < price.length; i++) {
      if (price[i] - prev >= mid) {
        count++
        prev = price[i]
      }
    }
    if (count >= k) lo = mid
    else hi = mid - 1
  }
  return lo
}
