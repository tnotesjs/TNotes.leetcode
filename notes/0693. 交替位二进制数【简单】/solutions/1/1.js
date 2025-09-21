/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
  let prev = n & 1 // 获取最低位
  n >>= 1 // 右移一位

  while (n > 0) {
    let curr = n & 1 // 获取当前最低位
    if (prev === curr) {
      // 如果相邻两位相同，则不是交替位
      return false
    }
    prev = curr
    n >>= 1
  }

  return true
}
