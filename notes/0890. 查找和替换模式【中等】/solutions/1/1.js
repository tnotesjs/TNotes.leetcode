/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
  const match = (word) => {
    if (word.length !== pattern.length) return false
    const w2p = {},
      p2w = {}
    for (let i = 0; i < word.length; i++) {
      const w = word[i],
        p = pattern[i]
      if (w2p[w] && w2p[w] !== p) return false
      if (p2w[p] && p2w[p] !== w) return false
      w2p[w] = p
      p2w[p] = w
    }
    return true
  }
  return words.filter(match)
}
