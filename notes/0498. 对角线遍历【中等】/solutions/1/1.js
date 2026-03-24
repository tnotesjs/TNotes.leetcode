/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  const m = mat.length,
    n = mat[0].length
  const res = []
  let r = 0,
    c = 0,
    up = true
  for (let i = 0; i < m * n; i++) {
    res.push(mat[r][c])
    if (up) {
      if (c === n - 1) {
        r++
        up = false
      } else if (r === 0) {
        c++
        up = false
      } else {
        r--
        c++
      }
    } else {
      if (r === m - 1) {
        c++
        up = true
      } else if (c === 0) {
        r++
        up = true
      } else {
        r++
        c--
      }
    }
  }
  return res
}
