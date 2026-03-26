/**
 * @param {number[]} differences
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var numberOfArrays = function (differences, lower, upper) {
  let prefix = 0,
    minP = 0,
    maxP = 0
  for (const d of differences) {
    prefix += d
    minP = Math.min(minP, prefix)
    maxP = Math.max(maxP, prefix)
  }
  // hidden[0] 的范围: [lower - minP, upper - maxP]
  return Math.max(0, upper - maxP - (lower - minP) + 1)
}
