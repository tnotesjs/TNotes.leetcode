/**
 * @param {number} divisor1
 * @param {number} divisor2
 * @param {number} uniqueCnt1
 * @param {number} uniqueCnt2
 * @return {number}
 */
var minimizeSet = function (divisor1, divisor2, uniqueCnt1, uniqueCnt2) {
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b))
  const lcm = (divisor1 / gcd(divisor1, divisor2)) * divisor2
  let lo = 1,
    hi = 2e9
  while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2)
    const a = mid - Math.floor(mid / divisor1)
    const b = mid - Math.floor(mid / divisor2)
    const c =
      mid -
      Math.floor(mid / divisor1) -
      Math.floor(mid / divisor2) +
      Math.floor(mid / lcm)
    if (a >= uniqueCnt1 && b >= uniqueCnt2 && c >= uniqueCnt1 + uniqueCnt2)
      hi = mid
    else lo = mid + 1
  }
  return lo
}
