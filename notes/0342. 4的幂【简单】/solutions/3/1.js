/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  // 4 的幂必须是正整数
  if (n <= 0) return false

  // 必须是 2 的幂（二进制中只有一个 1）
  if ((n & (n - 1)) !== 0) return false

  // 4 的幂在二进制中，1 只出现在奇数位置
  // 0x55555555 的二进制是 01010101010101010101010101010101
  // 这个掩码的奇数位都是 1，偶数位都是 0
  return (n & 0x55555555) !== 0
}
