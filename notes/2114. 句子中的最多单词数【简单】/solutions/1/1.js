/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
  let maxWords = 0

  for (let i = 0; i < sentences.length; i++) {
    maxWords = Math.max(maxWords, sentences[i].split(' ').length)
  }

  return maxWords
}
