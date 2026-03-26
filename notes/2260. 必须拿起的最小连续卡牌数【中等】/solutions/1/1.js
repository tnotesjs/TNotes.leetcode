/**
 * @param {number[]} cards
 * @return {number}
 */
var minimumCardPickup = function (cards) {
  const map = new Map()
  let minLen = Infinity
  for (let i = 0; i < cards.length; i++) {
    if (map.has(cards[i])) {
      minLen = Math.min(minLen, i - map.get(cards[i]) + 1)
    }
    map.set(cards[i], i)
  }
  return minLen === Infinity ? -1 : minLen
}
