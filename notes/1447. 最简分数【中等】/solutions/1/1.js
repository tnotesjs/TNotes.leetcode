/**
 * @param {number} n
 * @return {string[]}
 */
var simplifiedFractions = function (n) {
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b))
  const res = []
  for (let d = 2; d <= n; d++) {
    for (let num = 1; num < d; num++) {
      if (gcd(num, d) === 1) res.push(num + '/' + d)
    }
  }
  return res
}
