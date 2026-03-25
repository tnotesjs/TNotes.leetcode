/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function (rows, cols, rStart, cStart) {
  const res = [[rStart, cStart]]
  const dr = [0, 1, 0, -1],
    dc = [1, 0, -1, 0]
  let d = 0,
    steps = 1
  let r = rStart,
    c = cStart
  while (res.length < rows * cols) {
    for (let t = 0; t < 2; t++) {
      for (let i = 0; i < steps; i++) {
        r += dr[d]
        c += dc[d]
        if (r >= 0 && r < rows && c >= 0 && c < cols) res.push([r, c])
      }
      d = (d + 1) % 4
    }
    steps++
  }
  return res
}
