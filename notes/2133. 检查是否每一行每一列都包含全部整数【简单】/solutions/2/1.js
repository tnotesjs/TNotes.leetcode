/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function (matrix) {
  const n = matrix.length

  // 检查每一行
  for (let i = 0; i < n; i++) {
    const rowSet = new Set()
    for (let j = 0; j < n; j++) {
      rowSet.add(matrix[i][j])
    }
    // 如果集合大小不等于n，说明有重复或缺失
    if (rowSet.size !== n) {
      return false
    }
    // 检查是否包含1到n的所有整数
    for (let k = 1; k <= n; k++) {
      if (!rowSet.has(k)) {
        return false
      }
    }
  }

  // 检查每一列
  for (let j = 0; j < n; j++) {
    const colSet = new Set()
    for (let i = 0; i < n; i++) {
      colSet.add(matrix[i][j])
    }
    // 如果集合大小不等于n，说明有重复或缺失
    if (colSet.size !== n) {
      return false
    }
    // 检查是否包含1到n的所有整数
    for (let k = 1; k <= n; k++) {
      if (!colSet.has(k)) {
        return false
      }
    }
  }

  return true
}
