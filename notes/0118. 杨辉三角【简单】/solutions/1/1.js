/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows === 1) return [[1]]
  if (numRows === 2) return [[1], [1, 1]]

  // 初始化
  const triangle = []
  for (let i = 1; i <= numRows; i++) triangle.push(new Array(i).fill(1))

  // 内层求和
  for (let r = 2; r <= numRows - 1; r++)
    for (let c = 1; c <= r - 1; c++)
      triangle[r][c] = triangle[r - 1][c - 1] + triangle[r - 1][c]

  return triangle
}
