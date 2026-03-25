/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findPeakGrid = function (mat) {
  let lo = 0,
    hi = mat.length - 1
  while (lo < hi) {
    const mid = (lo + hi) >> 1
    const maxCol = mat[mid].indexOf(Math.max(...mat[mid]))
    if (mat[mid][maxCol] < mat[mid + 1][maxCol]) lo = mid + 1
    else hi = mid
  }
  const maxCol = mat[lo].indexOf(Math.max(...mat[lo]))
  return [lo, maxCol]
}
