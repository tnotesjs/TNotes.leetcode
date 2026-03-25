/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function (words) {
  words.sort((a, b) => a.length - b.length)
  const dp = new Map()
  let res = 1
  for (const word of words) {
    let best = 1
    for (let i = 0; i < word.length; i++) {
      const prev = word.slice(0, i) + word.slice(i + 1)
      if (dp.has(prev)) {
        best = Math.max(best, dp.get(prev) + 1)
      }
    }
    dp.set(word, best)
    res = Math.max(res, best)
  }
  return res
}
