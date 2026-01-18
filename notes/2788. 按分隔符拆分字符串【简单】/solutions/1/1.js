/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function (words, separator) {
  const result = []
  for (const word of words) {
    const parts = word.split(separator)
    for (const part of parts) {
      if (part.length > 0) {
        result.push(part)
      }
    }
  }
  return result
}
