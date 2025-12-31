/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function (num) {
  const digits = num
    .toString()
    .split('')
    .map(Number)
    .sort((a, b) => a - b)

  return digits[0] * 10 + digits[1] * 10 + digits[2] + digits[3]
}
