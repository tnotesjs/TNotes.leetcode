/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function (mat) {
  const m = mat.length,
    n = mat[0].length
  const sortDiag = (r, c) => {
    const vals = []
    let i = r,
      j = c
    while (i < m && j < n) vals.push(mat[i++][j++])
    vals.sort((a, b) => a - b)
    i = r
    j = c
    for (const v of vals) mat[i++][j++] = v
  }
  for (let i = 0; i < m; i++) sortDiag(i, 0)
  for (let j = 1; j < n; j++) sortDiag(0, j)
  return mat
}
