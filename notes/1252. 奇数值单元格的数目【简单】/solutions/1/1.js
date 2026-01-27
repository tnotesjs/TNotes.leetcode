/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function (m, n, indices) {
  // 记录每行和每列被增加的次数
  const row = new Array(m).fill(0)
  const col = new Array(n).fill(0)
  for (const [r, c] of indices) {
    row[r] += 1
    col[c] += 1
  }

  // 统计奇数行和奇数列的数量
  let oddRows = 0
  for (const v of row) if (v % 2 === 1) oddRows += 1
  let oddCols = 0
  for (const v of col) if (v % 2 === 1) oddCols += 1

  // 计算奇数单元格的数量
  return (
    oddRows * (n - oddCols) + // 奇行配偶列
    oddCols * (m - oddRows) // 奇列配偶行
  )
}
