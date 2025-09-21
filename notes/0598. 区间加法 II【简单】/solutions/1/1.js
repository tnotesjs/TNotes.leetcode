/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function (m, n, ops) {
  // 如果没有操作，整个矩阵的值都是0，最大值个数就是m*n
  if (ops.length === 0) {
    return m * n
  }

  // 找到所有操作中最小的行数和列数
  let minRow = m
  let minCol = n

  for (let op of ops) {
    minRow = Math.min(minRow, op[0])
    minCol = Math.min(minCol, op[1])
  }

  // 最大值的个数就是这个交集区域的面积
  return minRow * minCol
}
