/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
  const m = matrix.length
  const n = matrix[0].length

  // 检查除了最后一行和最后一列外的所有元素
  for (let i = 0; i < m - 1; i++) {
    for (let j = 0; j < n - 1; j++) {
      // 检查当前元素是否与其右下角元素相等
      if (matrix[i][j] !== matrix[i + 1][j + 1]) {
        return false
      }
    }
  }

  return true
}
