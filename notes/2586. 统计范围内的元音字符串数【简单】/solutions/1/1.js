/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function (words, left, right) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
  let count = 0

  for (let i = left; i <= right; i++) {
    const word = words[i]
    const first = word[0]
    const last = word[word.length - 1]

    if (vowels.has(first) && vowels.has(last)) {
      count++
    }
  }

  return count
}
