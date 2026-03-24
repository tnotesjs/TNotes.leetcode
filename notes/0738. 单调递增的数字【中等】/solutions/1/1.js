/**
 * @param {number} n
 * @return {number}
 */
var monotoneIncreasingDigits = function (n) {
  const digits = ('' + n).split('')
  let mark = digits.length
  for (let i = digits.length - 1; i > 0; i--) {
    if (digits[i] < digits[i - 1]) {
      mark = i
      digits[i - 1] = '' + (+digits[i - 1] - 1)
    }
  }
  for (let i = mark; i < digits.length; i++) digits[i] = '9'
  return +digits.join('')
}
