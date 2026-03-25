/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function (hand, groupSize) {
  if (hand.length % groupSize !== 0) return false
  hand.sort((a, b) => a - b)
  const map = new Map()
  for (const c of hand) map.set(c, (map.get(c) || 0) + 1)
  for (const c of hand) {
    if (map.get(c) === 0) continue
    for (let i = 0; i < groupSize; i++) {
      if ((map.get(c + i) || 0) === 0) return false
      map.set(c + i, map.get(c + i) - 1)
    }
  }
  return true
}
