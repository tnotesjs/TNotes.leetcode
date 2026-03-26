/**
 * @param {number} targetX
 * @param {number} targetY
 * @return {boolean}
 */
var isReachable = function (targetX, targetY) {
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b))
  let g = gcd(targetX, targetY)
  return (g & (g - 1)) === 0
}
