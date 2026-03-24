/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
  let digits = 1,
    start = 1,
    count = 9
  while (n > digits * count) {
    n -= digits * count
    digits++
    start *= 10
    count *= 10
  }
  const num = start + Math.floor((n - 1) / digits)
  const idx = (n - 1) % digits
  return parseInt(String(num)[idx])
}
