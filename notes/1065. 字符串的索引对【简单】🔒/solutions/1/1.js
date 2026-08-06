/**
 * @param {string} text
 * @param {string[]} words
 * @return {number[][]}
 */
var indexPairs = function (text, words) {
  const res = []
  for (let i = 0; i < text.length; i++) {
    for (const w of words) {
      if (text.startsWith(w, i)) {
        res.push([i, i + w.length - 1])
      }
    }
  }
  res.sort((a, b) => a[0] - b[0] || a[1] - b[1])
  return res
}
