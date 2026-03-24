/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {
  words.sort()
  const set = new Set([''])
  let res = ''
  for (const w of words) {
    if (set.has(w.slice(0, -1))) {
      set.add(w)
      if (w.length > res.length) res = w
    }
  }
  return res
}
