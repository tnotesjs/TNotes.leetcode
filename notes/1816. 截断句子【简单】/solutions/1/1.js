/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
  let spaces = 0

  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === ' ') {
      spaces += 1
      if (spaces === k) return s.slice(0, i)
    }
  }

  return s
}
