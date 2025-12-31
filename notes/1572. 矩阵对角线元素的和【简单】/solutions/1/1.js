/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  const n = mat.length
  let sum = 0

  for (let i = 0; i < n; i++) {
    sum += mat[i][i]
    sum += mat[i][n - 1 - i]
  }

  // 中心元素在奇数阶矩阵中被加了两次
  if (n % 2 === 1) {
    const mid = Math.floor(n / 2)
    sum -= mat[mid][mid]
  }

  return sum
}
