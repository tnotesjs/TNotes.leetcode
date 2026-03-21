/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let ans =
    x < 0
      ? '-' + x.toString().substring(1).split('').reverse().join('') - 0
      : x.toString().split('').reverse().join('') - 0

  const max = 2 ** 31 - 1
  const min = -(2 ** 31)

  return ans < min || ans > max ? 0 : ans
}
