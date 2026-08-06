/**
 * @param {number[]} arr
 * @return {number}
 */
var fixedPoint = function (arr) {
  let l = 0,
    r = arr.length - 1,
    ans = -1
  while (l <= r) {
    const m = (l + r) >> 1
    const val = arr[m] - m
    if (val >= 0) {
      if (val === 0) ans = m
      r = m - 1
    } else {
      l = m + 1
    }
  }
  return ans
}
