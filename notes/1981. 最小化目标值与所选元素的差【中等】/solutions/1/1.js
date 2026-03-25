/**
 * @param {number[][]} mat
 * @param {number} target
 * @return {number}
 */
var minimizeTheDifference = function (mat, target) {
  let possible = new Set([0])
  for (const row of mat) {
    const next = new Set()
    for (const s of possible) {
      for (const v of row) {
        next.add(s + v)
      }
    }
    possible = next
  }
  let minDiff = Infinity
  for (const s of possible) {
    minDiff = Math.min(minDiff, Math.abs(s - target))
  }
  return minDiff
}
