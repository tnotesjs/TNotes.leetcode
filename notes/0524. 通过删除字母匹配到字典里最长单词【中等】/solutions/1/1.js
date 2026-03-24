/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function (s, dictionary) {
  dictionary.sort((a, b) => b.length - a.length || a.localeCompare(b))
  for (const word of dictionary) {
    let i = 0
    for (let j = 0; j < s.length && i < word.length; j++)
      if (s[j] === word[i]) i++
    if (i === word.length) return word
  }
  return ''
}
