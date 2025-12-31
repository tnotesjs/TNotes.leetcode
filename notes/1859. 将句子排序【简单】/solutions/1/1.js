/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
  const words = s.split(' ')
  const ordered = new Array(words.length)

  for (const word of words) {
    const pos = word.charCodeAt(word.length - 1) - 49 // '1' -> 0
    ordered[pos] = word.slice(0, word.length - 1)
  }

  return ordered.join(' ')
}
