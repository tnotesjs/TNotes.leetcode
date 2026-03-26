/**
 * @param {number} num
 * @return {number}
 */
var sortDigits = function(num) {
  const negative = num < 0
  const digits = Math.abs(num).toString().split('')
  if (negative) {
    digits.sort((a, b) => b - a)
  } else {
    digits.sort((a, b) => a - b)
  }
  const result = parseInt(digits.join(''))
  return negative ? -result : result
}
