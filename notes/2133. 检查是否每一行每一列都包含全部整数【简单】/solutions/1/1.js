/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function (matrix) {
  const n = matrix.length
  let cur = 0
  const count = {}
  for (let i = 1; i <= n; i++) {
    count[i] = 0
  }

  // 检查每一行
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      count[matrix[r][c]]++
    }
    cur++
    for (let i = 1; i <= n; i++) {
      if (count[i] !== cur) {
        return false
      }
    }
  }

  // 检查每一列
  for (let c = 0; c < n; c++) {
    for (let r = 0; r < n; r++) {
      count[matrix[r][c]]++
    }
    cur++
    for (let i = 1; i <= n; i++) {
      if (count[i] !== cur) {
        return false
      }
    }
  }

  return true
}
