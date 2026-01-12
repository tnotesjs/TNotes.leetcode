/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
var allCellsDistOrder = function (rows, cols, rCenter, cCenter) {
  const result = []

  // 生成所有坐标
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      result.push([i, j])
    }
  }

  // 按曼哈顿距离排序
  result.sort((a, b) => {
    const distA = Math.abs(a[0] - rCenter) + Math.abs(a[1] - cCenter)
    const distB = Math.abs(b[0] - rCenter) + Math.abs(b[1] - cCenter)
    return distA - distB
  })

  return result
}
