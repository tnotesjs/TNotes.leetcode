/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
  // 丑数必须是正整数
  if (n <= 0) return false

  // 1 是丑数
  if (n === 1) return true

  // 递归处理
  if (n % 2 === 0) return isUgly(n / 2)
  if (n % 3 === 0) return isUgly(n / 3)
  if (n % 5 === 0) return isUgly(n / 5)

  // 不能被 2、3、5 整除，则不是丑数
  return false
}
