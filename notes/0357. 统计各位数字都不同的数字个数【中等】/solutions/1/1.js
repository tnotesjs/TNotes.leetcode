/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function (n) {
  if (n === 0) return 1
  let res = 10,
    product = 9
  for (let i = 2; i <= n && i <= 10; i++) {
    product *= 10 - i + 1
    res += product
  }
  return res
}
