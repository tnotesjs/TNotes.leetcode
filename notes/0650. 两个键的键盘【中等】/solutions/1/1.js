/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function (n) {
  let res = 0
  for (let d = 2; d <= n; d++) {
    while (n % d === 0) {
      res += d
      n /= d
    }
  }
  return res
}
