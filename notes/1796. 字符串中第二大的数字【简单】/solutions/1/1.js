/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function (s) {
  let first = -1
  let second = -1

  for (const ch of s) {
    if (ch < '0' || ch > '9') continue
    const v = ch.charCodeAt(0) - 48
    if (v > first) {
      second = first
      first = v
    } else if (v < first && v > second) {
      second = v
    }
  }

  return second
}
