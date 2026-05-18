/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const n = matrix.length
  for (let i = 0; i < Math.floor(n / 2); i++) {
    // 上下翻转
    ;[matrix[i], matrix[n - i - 1]] = [matrix[n - i - 1], matrix[i]]
  }
  for (let i = 0; i < n; i++) {
    // 主对角线翻转
    for (let j = 0; j < i; j++) {
      if (i === j) continue
      ;[matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
    }
  }
}
