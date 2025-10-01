/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
  const m = matrix.length
  const n = matrix[0].length

  // 检查从第一行开始的对角线
  for (let j = 0; j < n; j++) {
    const val = matrix[0][j]
    for (let i = 1, k = j + 1; i < m && k < n; i++, k++) {
      if (matrix[i][k] !== val) {
        return false
      }
    }
  }

  // 检查从第一列开始的对角线（跳过(0,0)避免重复检查）
  for (let i = 1; i < m; i++) {
    const val = matrix[i][0]
    for (let j = 1, k = i + 1; j < n && k < m; j++, k++) {
      if (matrix[k][j] !== val) {
        return false
      }
    }
  }

  return true
}
