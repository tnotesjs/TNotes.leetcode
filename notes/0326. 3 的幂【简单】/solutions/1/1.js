/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  // 3 的幂必须是正整数
  if (n <= 0) return false

  // 不断除以 3，直到不能整除为止
  while (n % 3 === 0) {
    n /= 3
  }

  // 如果最后结果是 1，说明原来是 3 的幂
  return n === 1
}
