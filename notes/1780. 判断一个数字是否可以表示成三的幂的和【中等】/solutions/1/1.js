/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function (n) {
  // n 的三进制表示中每一位只能是 0 或 1
  while (n > 0) {
    if (n % 3 === 2) return false
    n = Math.floor(n / 3)
  }
  return true
}
