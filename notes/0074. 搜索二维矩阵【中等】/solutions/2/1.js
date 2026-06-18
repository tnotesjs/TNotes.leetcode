/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const m = matrix.length
  const n = matrix[0].length

  // 第一次二分：找到 target 可能所在的行
  let top = 0
  let bottom = m - 1
  let row = -1

  while (top <= bottom) {
    const mid = Math.floor((top + bottom) / 2)
    if (target >= matrix[mid][0] && target <= matrix[mid][n - 1]) {
      row = mid
      break
    } else if (target > matrix[mid][n - 1]) {
      top = mid + 1
    } else {
      bottom = mid - 1
    }
  }

  if (row === -1) return false

  // 第二次二分：在该行内查找 target
  let left = 0
  let right = n - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (matrix[row][mid] === target) return true
    if (matrix[row][mid] < target) left = mid + 1
    else right = mid - 1
  }

  return false
}
