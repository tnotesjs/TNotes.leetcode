/**
 * 二分查找法
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x === 0) return 0

  let left = 1
  let right = x
  let result = 0

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)

    if (mid <= x / mid) {
      result = mid
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return result
}
