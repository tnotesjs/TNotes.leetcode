/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function (n) {
  const root = Math.floor(Math.sqrt(n))
  if (root * root !== n) return false

  for (let d = 2; d * d <= root; d += 1) {
    if (root % d === 0) return false
  }

  return root > 1
}
