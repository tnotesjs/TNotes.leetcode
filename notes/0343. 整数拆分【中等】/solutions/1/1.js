/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  if (n <= 3) return n - 1
  const q = Math.floor(n / 3),
    r = n % 3
  if (r === 0) return 3 ** q
  if (r === 1) return 3 ** (q - 1) * 4
  return 3 ** q * 2
}
