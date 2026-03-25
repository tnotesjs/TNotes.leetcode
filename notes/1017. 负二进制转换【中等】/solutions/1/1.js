/**
 * @param {number} n
 * @return {string}
 */
var baseNeg2 = function (n) {
  if (n === 0) return '0'
  let res = ''
  while (n !== 0) {
    const remainder = n & 1
    res = remainder + res
    n = (n - remainder) / -2
  }
  return res
}
