/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function (s) {
  let cuts = 0
  for (let i = 1; i < s.length; i += 1) {
    if (s[i - 1] === '1' && s[i] === '0') {
      cuts += 1
      if (cuts > 1) return false
    }
  }
  return true
}
