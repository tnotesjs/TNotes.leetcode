/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const INT_MAX = 2 ** 31 - 1
  const INT_MIN = -(2 ** 31)

  let i = 0
  const n = s.length

  // 1. 跳过前导空格
  while (i < n && s[i] === ' ') i++

  // 2. 判断符号
  let sign = 1
  if (i < n && (s[i] === '+' || s[i] === '-')) {
    if (s[i] === '-') sign = -1
    i++
  }

  // 3. 读取数字
  let ans = 0
  while (i < n && s[i] >= '0' && s[i] <= '9') {
    const digit = s[i] - '0'
    // 提前检查溢出
    if (ans > Math.floor((INT_MAX - digit) / 10)) {
      return sign === 1 ? INT_MAX : INT_MIN
    }
    ans = ans * 10 + digit
    i++
  }

  return sign * ans
}
