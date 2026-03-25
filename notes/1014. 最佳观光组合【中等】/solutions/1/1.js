/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function (values) {
  let res = 0
  let maxI = values[0] + 0 // values[i] + i
  for (let j = 1; j < values.length; j++) {
    res = Math.max(res, maxI + values[j] - j)
    maxI = Math.max(maxI, values[j] + j)
  }
  return res
}
