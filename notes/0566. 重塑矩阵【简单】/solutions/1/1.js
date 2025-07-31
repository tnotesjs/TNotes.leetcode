/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  // 获取原矩阵的行数和列数
  const m = mat.length
  const n = mat[0].length

  // 如果元素总数不匹配，无法重塑，返回原矩阵
  if (m * n !== r * c) {
    return mat
  }

  // 创建新的 r x c 矩阵
  const reshaped = new Array(r)
  for (let i = 0; i < r; i++) {
    reshaped[i] = new Array(c)
  }

  // 按行遍历顺序填充新矩阵
  for (let i = 0; i < m * n; i++) {
    // 原矩阵中的位置
    const originalRow = Math.floor(i / n)
    const originalCol = i % n

    // 新矩阵中的位置
    const newRow = Math.floor(i / c)
    const newCol = i % c

    // 将元素从原位置复制到新位置
    reshaped[newRow][newCol] = mat[originalRow][originalCol]
  }

  return reshaped
}

// 简化写法：
// var matrixReshape = function (mat, r, c) {
//   const m = mat.length
//   const n = mat[0].length

//   // 如果元素总数不匹配，返回原矩阵
//   if (m * n !== r * c) {
//     return mat
//   }

//   // 将原矩阵扁平化为一维数组
//   const flat = mat.flat()

//   // 构造新矩阵
//   const result = []
//   for (let i = 0; i < r; i++) {
//     result.push(flat.slice(i * c, (i + 1) * c))
//   }

//   return result
// }
