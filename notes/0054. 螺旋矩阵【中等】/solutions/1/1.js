/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const result = []
  let top = 0,
    bottom = matrix.length - 1
  let left = 0,
    right = matrix[0].length - 1

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) result.push(matrix[top][i]) // 向右
    top++
    for (let i = top; i <= bottom; i++) result.push(matrix[i][right]) // 向下
    right--
    if (top <= bottom) {
      for (let i = right; i >= left; i--) result.push(matrix[bottom][i]) // 向左
      bottom--
    }
    if (left <= right) {
      for (let i = bottom; i >= top; i--) result.push(matrix[i][left]) // 向上
      left++
    }
  }
  return result
}
