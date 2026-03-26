/**
 * @param {string} word
 * @return {number}
 */
var removeAlmostEqualCharacters = function (word) {
  let count = 0,
    i = 1
  while (i < word.length) {
    if (Math.abs(word.charCodeAt(i) - word.charCodeAt(i - 1)) <= 1) {
      count++
      i += 2
    } else {
      i++
    }
  }
  return count
}
