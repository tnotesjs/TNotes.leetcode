/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function (s, words) {
  let built = ''

  for (const w of words) {
    built += w
    if (built.length >= s.length) {
      return built.slice(0, s.length) === s
    }
  }

  return false
}
