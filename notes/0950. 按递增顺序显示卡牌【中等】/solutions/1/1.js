/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
  deck.sort((a, b) => a - b)
  const n = deck.length
  const result = new Array(n)
  const queue = []
  for (let i = 0; i < n; i++) queue.push(i)

  for (const card of deck) {
    result[queue.shift()] = card
    if (queue.length) queue.push(queue.shift())
  }

  return result
}
