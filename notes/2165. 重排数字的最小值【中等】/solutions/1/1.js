/**
 * @param {number} num
 * @return {number}
 */
var smallestNumber = function (num) {
  if (num === 0) return 0
  const neg = num < 0
  const digits = Math.abs(num).toString().split('').map(Number)
  if (neg) {
    // 最大值，降序排列
    digits.sort((a, b) => b - a)
    return -Number(digits.join(''))
  } else {
    // 最小值，升序排列，首位不能为 0
    digits.sort((a, b) => a - b)
    // 找第一个非零数字放到首位
    const idx = digits.findIndex((d) => d !== 0)
    ;[digits[0], digits[idx]] = [digits[idx], digits[0]]
    return Number(digits.join(''))
  }
}
