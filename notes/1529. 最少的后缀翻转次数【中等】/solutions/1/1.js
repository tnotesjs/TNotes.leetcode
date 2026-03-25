/**
 * @param {string} target
 * @return {number}
 */
var minFlips = function (target) {
  let flips = 0
  let current = '0'
  for (const c of target) {
    if (c !== current) {
      flips++
      current = c
    }
  }
  return flips
}
