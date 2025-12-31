/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
  let i = 0,
    j = 0 // word index
  let p = 0,
    q = 0 // char index inside word

  while (i < word1.length && j < word2.length) {
    if (word1[i][p] !== word2[j][q]) return false

    p++
    q++

    if (p === word1[i].length) {
      i++
      p = 0
    }
    if (q === word2[j].length) {
      j++
      q = 0
    }
  }

  return i === word1.length && j === word2.length
}
