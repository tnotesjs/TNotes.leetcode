/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const max = 2 ** 31 - 1
  const min = -(2 ** 31)

  let ans = 0
  while (x !== 0) {
    ans = ans * 10 + (x % 10)
    x = Math.trunc(x / 10)
  }

  return ans < min || ans > max ? 0 : ans
}
