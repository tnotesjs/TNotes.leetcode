/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var modifiedMatrix = function (matrix) {
  const m = matrix.length
  const n = matrix[0].length
  // 先计算每列的最大值
  const colMax = new Array(n).fill(-Infinity)
  for (let j = 0; j < n; j++) {
    for (let i = 0; i < m; i++) {
      colMax[j] = Math.max(colMax[j], matrix[i][j])
    }
  }
  // 将 -1 替换为对应列的最大值
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === -1) {
        matrix[i][j] = colMax[j]
      }
    }
  }
  return matrix
}
