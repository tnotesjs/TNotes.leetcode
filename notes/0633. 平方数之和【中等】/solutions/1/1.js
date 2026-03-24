/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  let a = 0,
    b = Math.floor(Math.sqrt(c))
  while (a <= b) {
    const sum = a * a + b * b
    if (sum === c) return true
    else if (sum < c) a++
    else b--
  }
  return false
}
