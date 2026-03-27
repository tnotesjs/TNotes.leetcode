/**
 * @param {number} m
 * @param {number} n
 * @param {number[]} horizontalCut
 * @param {number[]} verticalCut
 * @return {number}
 */
var minimumCost = function(m, n, horizontalCut, verticalCut) {
  horizontalCut.sort((a, b) => b - a)
  verticalCut.sort((a, b) => b - a)
  let hi = 0, vi = 0
  let hPieces = 1, vPieces = 1
  let cost = 0
  while (hi < horizontalCut.length && vi < verticalCut.length) {
    if (horizontalCut[hi] >= verticalCut[vi]) {
      cost += horizontalCut[hi] * vPieces
      hPieces++
      hi++
    } else {
      cost += verticalCut[vi] * hPieces
      vPieces++
      vi++
    }
  }
  while (hi < horizontalCut.length) {
    cost += horizontalCut[hi] * vPieces
    hi++
  }
  while (vi < verticalCut.length) {
    cost += verticalCut[vi] * hPieces
    vi++
  }
  return cost
}
