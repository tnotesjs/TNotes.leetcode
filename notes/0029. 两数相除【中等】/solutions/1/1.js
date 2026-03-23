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
    // 倍增加速：找到最大的 2^k 使得 temp*2^k >= a
    while (a - temp <= temp) {
      temp <<= 1
      cnt <<= 1
    }
    a -= temp
    ans += cnt
  }

  return sign === 1 ? ans : -ans
}
