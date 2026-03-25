/**
 * @param {number[][]} matrix
 * @return {number}
 */
var largestSubmatrix = function (matrix) {
  const m = matrix.length,
    n = matrix[0].length
  for (let i = 1; i < m; i++)
    for (let j = 0; j < n; j++)
      if (matrix[i][j] === 1) matrix[i][j] += matrix[i - 1][j]
  let res = 0
  for (let i = 0; i < m; i++) {
    matrix[i].sort((a, b) => b - a)
    for (let j = 0; j < n; j++) {
      res = Math.max(res, matrix[i][j] * (j + 1))
    }
  }
  return res
}
