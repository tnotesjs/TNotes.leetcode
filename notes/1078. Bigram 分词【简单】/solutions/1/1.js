/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function (text, first, second) {
  const words = text.split(' ')
  const res = []
  for (let i = 0; i + 2 < words.length; i++) {
    if (words[i] === first && words[i + 1] === second) {
      res.push(words[i + 2])
    }
  }
  return res
}
