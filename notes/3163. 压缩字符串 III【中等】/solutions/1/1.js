/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function(word) {
  let comp = ''
  let i = 0
  while (i < word.length) {
    const ch = word[i]
    let count = 0
    while (i < word.length && word[i] === ch && count < 9) {
      count++
      i++
    }
    comp += count + ch
  }
  return comp
}
