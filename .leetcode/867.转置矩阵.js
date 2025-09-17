/*
 * @lc app=leetcode.cn id=867 lang=javascript
 *
 * [867] 转置矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  const m = matrix.length // 原矩阵行数
  const n = matrix[0].length // 原矩阵列数

  // 创建转置后的矩阵，行数为n，列数为m
  const transposed = new Array(n)
  for (let i = 0; i < n; i++) {
    transposed[i] = new Array(m)
  }

  // 填充转置矩阵：原矩阵的第i行第j列元素，变为转置矩阵的第j行第i列元素
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      transposed[j][i] = matrix[i][j]
    }
  }

  return transposed
}
// @lc code=end
