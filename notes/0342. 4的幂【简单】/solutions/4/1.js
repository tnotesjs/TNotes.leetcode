/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  // 4 的幂必须是正整数
  if (n <= 0) return false

  // 必须是 2 的幂
  if ((n & (n - 1)) !== 0) return false

  // 4 的幂满足 (n - 1) % 3 === 0
  // 这是因为 4^n - 1 = (2^n - 1)(2^n + 1)
  // 其中 2^n - 1 和 2^n + 1 必有一个是 3 的倍数
  return (n - 1) % 3 === 0
}
