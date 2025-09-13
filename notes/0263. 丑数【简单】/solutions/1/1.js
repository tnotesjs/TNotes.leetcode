/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
  // 丑数必须是正整数
  if (n <= 0) return false

  // 不断除以 2、3、5
  while (n !== 1) {
    if (n % 2 === 0) {
      n /= 2
    } else if (n % 3 === 0) {
      n /= 3
    } else if (n % 5 === 0) {
      n /= 5
    } else {
      // 如果不能被 2、3、5 整除，则不是丑数
      return false
    }
  }

  return true
}
