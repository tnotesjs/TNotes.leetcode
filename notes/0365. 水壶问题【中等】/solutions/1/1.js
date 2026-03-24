/**
 * @param {number} jug1Capacity
 * @param {number} jug2Capacity
 * @param {number} targetCapacity
 * @return {boolean}
 */
var canMeasureWater = function (jug1Capacity, jug2Capacity, targetCapacity) {
  if (jug1Capacity + jug2Capacity < targetCapacity) return false
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b))
  return targetCapacity % gcd(jug1Capacity, jug2Capacity) === 0
}
