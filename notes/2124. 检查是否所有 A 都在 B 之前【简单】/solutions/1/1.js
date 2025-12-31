/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function (s) {
  let seenB = false
  for (const ch of s) {
    if (ch === 'b') {
      seenB = true
    } else if (seenB) {
      return false
    }
  }
  return true
}
