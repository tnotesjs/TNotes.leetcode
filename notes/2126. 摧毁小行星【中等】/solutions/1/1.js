/**
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 */
var asteroidsDestroyed = function (mass, asteroids) {
  asteroids.sort((a, b) => a - b)
  let m = mass
  for (const a of asteroids) {
    if (m < a) return false
    m += a
  }
  return true
}
