/**
 * @param {number} n
 * @param {number[]} quantities
 * @return {number}
 */
var minimizedMaximum = function (n, quantities) {
  let lo = 1,
    hi = Math.max(...quantities)
  while (lo < hi) {
    const mid = (lo + hi) >> 1
    let cnt = 0
    for (const q of quantities) {
      cnt += Math.ceil(q / mid)
    }
    if (cnt <= n) hi = mid
    else lo = mid + 1
  }
  return lo
}
