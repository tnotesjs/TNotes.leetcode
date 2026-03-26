/**
 * @param {string} s
 * @return {number}
 */
var secondsToRemoveOccurrences = function (s) {
  let seconds = 0,
    zeros = 0
  for (const c of s) {
    if (c === '0') {
      zeros++
    } else if (zeros > 0) {
      seconds = Math.max(seconds + 1, zeros)
    }
  }
  return seconds
}
