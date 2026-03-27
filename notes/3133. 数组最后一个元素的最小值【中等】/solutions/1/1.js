/**
 * @param {number} n
 * @param {number} x
 * @return {number}
 */
var minEnd = function(n, x) {
  // 结果的二进制中，x 为 1 的位必须为 1
  // 在 x 为 0 的位上，依次填入 n-1 的二进制位
  let res = BigInt(x)
  let remaining = BigInt(n - 1)
  let bit = 1n
  while (remaining > 0n) {
    if ((res & bit) === 0n) {
      // 这一位是 0，可以填入 remaining 的最低位
      if (remaining & 1n) res |= bit
      remaining >>= 1n
    }
    bit <<= 1n
  }
  return Number(res)
}
