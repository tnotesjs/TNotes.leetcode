/**
 * @param {string} word
 * @return {number}
 */
var addMinimum = function (word) {
  let groups = 1
  for (let i = 1; i < word.length; i++) {
    if (word[i] <= word[i - 1]) groups++
  }
  return groups * 3 - word.length
}
