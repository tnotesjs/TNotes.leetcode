/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  const INT_MAX = 2 ** 31 - 1
  const INT_MIN = -(2 ** 31)

  // 唯一溢出情况：-2^31 / -1 = 2^31
  if (dividend === INT_MIN && divisor === -1) return INT_MAX

  const sign = dividend > 0 === divisor > 0 ? 1 : -1
  // 全转为负数操作，避免 -2^31 取绝对値溢出
  let a = -Math.abs(dividend)
  let b = -Math.abs(divisor)
  let ans = 0

  while (a <= b) {
    let temp = b
    let cnt = 1
    while (a - temp <= temp) {
      // 不能用 <<= 做倍增，因为 JS 位运算会先把 Number 转成 32 位有符号整数
      // 一旦结果超过 32 位范围，高位会被截断，temp 和 cnt 都可能发生符号翻转
      // 例如 cnt = 1073741824 时，32 位二进制是 01000000 00000000 00000000 00000000
      // 再左移一次会变成 10000000 00000000 00000000 00000000，也就是 -2147483648
      // 这里改用加法倍增，整个计算过程都保持在 Number 的安全整数范围内
      temp += temp
      cnt += cnt
    }
    a -= temp
    ans += cnt
  }

  return sign === 1 ? ans : -ans
}
