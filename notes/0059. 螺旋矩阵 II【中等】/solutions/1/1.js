/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  const matrix = Array.from({ length: n }, () => new Array(n))
  let num = 1
  let top = 0,
    bottom = n - 1,
    left = 0,
    right = n - 1

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) matrix[top][i] = num++ // 向右
    top++
    for (let i = top; i <= bottom; i++) matrix[i][right] = num++ // 向下
    right--
    if (top <= bottom) {
      for (let i = right; i >= left; i--) matrix[bottom][i] = num++ // 向左
      bottom--
    }
    if (left <= right) {
      for (let i = bottom; i >= top; i--) matrix[i][left] = num++ // 向上
      left++
    }
  }
  return matrix
}
