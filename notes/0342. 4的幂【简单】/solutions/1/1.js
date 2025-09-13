/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  // 4 的幂必须是正整数
  if (n <= 0) return false

  // 不断除以 4，直到不能整除为止
  while (n % 4 === 0) {
    n /= 4
  }

  // 如果最后结果是 1，说明原来是 4 的幂
  return n === 1
}
