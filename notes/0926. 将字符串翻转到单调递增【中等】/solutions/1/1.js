/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function (s) {
  let ones = 0
  let flips = 0

  for (const ch of s) {
    if (ch === '1') {
      ones++
    } else {
      flips = Math.min(flips + 1, ones)
    }
  }

  return flips
}
