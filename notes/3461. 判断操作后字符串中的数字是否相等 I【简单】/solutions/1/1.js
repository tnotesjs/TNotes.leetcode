/**
 * @param {string} s
 * @return {boolean}
 */
var hasSameDigits = function (s) {
  // 将字符串转为数字数组
  let digits = s.split('').map(Number)

  // 重复操作直到只剩 2 个数字
  while (digits.length > 2) {
    const next = []
    for (let i = 0; i < digits.length - 1; i++) {
      next.push((digits[i] + digits[i + 1]) % 10)
    }
    digits = next
  }

  return digits[0] === digits[1]
}
