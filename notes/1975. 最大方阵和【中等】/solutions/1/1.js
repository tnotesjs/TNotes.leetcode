/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxMatrixSum = function (matrix) {
  let totalAbs = 0,
    minAbs = Infinity,
    negCount = 0
  for (const row of matrix) {
    for (const v of row) {
      totalAbs += Math.abs(v)
      minAbs = Math.min(minAbs, Math.abs(v))
      if (v < 0) negCount++
    }
  }
  return negCount % 2 === 0 ? totalAbs : totalAbs - 2 * minAbs
}
