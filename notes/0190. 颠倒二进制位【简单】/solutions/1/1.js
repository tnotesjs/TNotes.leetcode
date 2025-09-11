/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function (n) {
  let result = 0

  for (let i = 0; i < 32; i++) {
    // 将结果左移一位，为新位腾出空间
    result <<= 1
    // 取 n 的最低位，将其放到 result 的最低位
    result |= n & 1
    // 将 n 右移一位，准备处理下一位
    n >>= 1
  }

  // 由于 JS 中所有数字都是有符号 32 位整数，
  // 需要将其转换为无符号 32 位整数
  return result >>> 0
}
