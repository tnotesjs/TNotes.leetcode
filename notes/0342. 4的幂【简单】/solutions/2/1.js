/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  // 4 的幂必须是正整数
  if (n <= 0) return false

  // 1 是 4 的幂 (4⁰)
  if (n === 1) return true

  // 不能被 4 整除，不是 4 的幂
  if (n % 4 !== 0) return false

  // 递归检查
  return isPowerOfFour(n / 4)
}
