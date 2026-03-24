/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n < 0) {
    x = 1 / x
    n = -n
  }
  let result = 1
  while (n > 0) {
    if (n % 2 === 1) result *= x // 当前位为 1，累乘当前底数
    x *= x // 底数平方
    n = Math.floor(n / 2)
  }
  return result
}
