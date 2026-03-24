/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dictionary, sentence) {
  const set = new Set(dictionary)
  return sentence
    .split(' ')
    .map((word) => {
      for (let i = 1; i <= word.length; i++) {
        const prefix = word.substring(0, i)
        if (set.has(prefix)) return prefix
      }
      return word
    })
    .join(' ')
}
