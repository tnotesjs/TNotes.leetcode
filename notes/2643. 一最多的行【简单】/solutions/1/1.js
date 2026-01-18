/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function (mat) {
  let maxRow = 0
  let maxCount = 0

  for (let i = 0; i < mat.length; i++) {
    // 统计当前行1的数量
    const count = mat[i].reduce((sum, val) => sum + val, 0)

    // 更新最大值（只在更大时更新，保证下标最小）
    if (count > maxCount) {
      maxCount = count
      maxRow = i
    }
  }

  return [maxRow, maxCount]
}
