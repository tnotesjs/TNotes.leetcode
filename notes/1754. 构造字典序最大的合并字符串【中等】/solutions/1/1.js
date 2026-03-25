/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var largestMerge = function (word1, word2) {
  let res = ''
  let i = 0,
    j = 0
  while (i < word1.length && j < word2.length) {
    if (word1.slice(i) >= word2.slice(j)) res += word1[i++]
    else res += word2[j++]
  }
  return res + word1.slice(i) + word2.slice(j)
}
