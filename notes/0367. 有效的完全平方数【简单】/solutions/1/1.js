/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  if (num === 1) return true

  let left = 1

  // 二分查找 - 边界优化 - 缩小搜索空间
  let right = Math.floor(num / 2)
  // 对于 num > 1，完全平方数的平方根不会超过 num/2（当 num >= 4 时严格成立）

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    let square = mid * mid

    if (square === num) {
      return true
    } else if (square < num) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return false
}
