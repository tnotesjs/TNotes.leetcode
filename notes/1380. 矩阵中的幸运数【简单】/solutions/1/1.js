/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
  const m = matrix.length
  const n = matrix[0].length

  // 1. 先预处理每行最小值和每列最大值
  const rowMin = new Array(m).fill(Infinity)
  const colMax = new Array(n).fill(-Infinity)

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const val = matrix[i][j]
      if (val < rowMin[i]) rowMin[i] = val
      if (val > colMax[j]) colMax[j] = val
    }
  }

  // 2. 再找交集
  const ans = []
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const val = matrix[i][j]
      if (val === rowMin[i] && val === colMax[j]) {
        ans.push(val)
      }
    }
  }

  return ans
}
