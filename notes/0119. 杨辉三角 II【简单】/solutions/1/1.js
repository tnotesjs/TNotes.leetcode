/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  if (rowIndex === 0) return [1]
  if (rowIndex === 1) return [1, 1]

  // 初始化
  const triangle = []
  for (let i = 0; i <= rowIndex; i++) triangle.push(new Array(i + 1).fill(1))

  // 内层求和
  for (let r = 2; r <= rowIndex; r++)
    for (let c = 1; c <= r - 1; c++)
      triangle[r][c] = triangle[r - 1][c - 1] + triangle[r - 1][c]

  return triangle[rowIndex]
}
