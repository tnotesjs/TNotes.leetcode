/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
var allCellsDistOrder = function (rows, cols, rCenter, cCenter) {
  const res = []
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      res.push([r, c])
    }
  }
  res.sort(
    (a, b) =>
      Math.abs(a[0] - rCenter) +
      Math.abs(a[1] - cCenter) -
      (Math.abs(b[0] - rCenter) + Math.abs(b[1] - cCenter))
  )
  return res
}
