/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function (words) {
  const freq = new Array(26).fill(0)
  for (const w of words) {
    for (const ch of w) {
      freq[ch.charCodeAt(0) - 97] += 1
    }
  }

  const n = words.length
  for (const c of freq) {
    if (c % n !== 0) return false
  }
  return true
}
