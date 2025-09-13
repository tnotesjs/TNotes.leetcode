/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  // 3 的幂必须是正整数
  if (n <= 0) return false

  // 1 是 3 的幂 (3^0)
  if (n === 1) return true

  // 不能被 3 整除，不是 3 的幂
  if (n % 3 !== 0) return false

  // 递归检查
  return isPowerOfThree(n / 3)
}
