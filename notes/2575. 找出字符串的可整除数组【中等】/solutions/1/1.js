/**
 * @param {string} word
 * @param {number} m
 * @return {number[]}
 */
var divisibilityArray = function (word, m) {
  const n = word.length
  const div = new Array(n)
  let rem = 0
  for (let i = 0; i < n; i++) {
    rem = (rem * 10 + (word.charCodeAt(i) - 48)) % m
    div[i] = rem === 0 ? 1 : 0
  }
  return div
}
