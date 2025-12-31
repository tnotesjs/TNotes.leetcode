/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function (word1, word2) {
  const diff = new Array(26).fill(0)
  const base = 'a'.charCodeAt(0)

  for (let i = 0; i < word1.length; i += 1) {
    diff[word1.charCodeAt(i) - base] += 1
    diff[word2.charCodeAt(i) - base] -= 1
  }

  for (const d of diff) {
    if (Math.abs(d) > 3) return false
  }
  return true
}
