/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var nthUglyNumber = function (n, a, b, c) {
  const gcd = (x, y) => (y === 0 ? x : gcd(y, x % y))
  const lcm = (x, y) => (x / gcd(x, y)) * y
  const ab = lcm(a, b)
  const ac = lcm(a, c)
  const bc = lcm(b, c)
  const abc = lcm(ab, c)
  const count = (x) => {
    return (
      Math.floor(x / a) +
      Math.floor(x / b) +
      Math.floor(x / c) -
      Math.floor(x / ab) -
      Math.floor(x / ac) -
      Math.floor(x / bc) +
      Math.floor(x / abc)
    )
  }
  let lo = 1,
    hi = 2e9
  while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2)
    if (count(mid) >= n) hi = mid
    else lo = mid + 1
  }
  return lo
}
