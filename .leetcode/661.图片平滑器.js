/*
 * @lc app=leetcode.cn id=661 lang=javascript
 *
 * [661] 图片平滑器
 */

// @lc code=start
/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function (img) {
  const m = img.length
  const n = img[0].length
  const result = new Array(m)

  // 初始化结果数组
  for (let i = 0; i < m; i++) {
    result[i] = new Array(n)
  }

  // 遍历每个像素点
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let sum = 0
      let count = 0

      // 遍历当前像素及其周围的8个像素
      for (let x = Math.max(0, i - 1); x <= Math.min(m - 1, i + 1); x++) {
        for (let y = Math.max(0, j - 1); y <= Math.min(n - 1, j + 1); y++) {
          sum += img[x][y]
          count++
        }
      }

      // 计算平均值并向下取整
      result[i][j] = Math.floor(sum / count)
    }
  }

  return result
}
// @lc code=end

// 暴力解法：
// 遍历所有像素点，对每个像素点周围的 3*3 矩阵像素进行求和，并统计有效像素点的个数，最后计算平均值（向下取整）。
// 遍历每个点的 3*3 矩阵的时候需要注意边界处理。
// 时间复杂度：$O(m×n)$，其中 m 和 n 分别是图像的行数和列数。虽然有三层循环，但内两层循环最多只遍历 9 个元素，因此总体仍是线性时间复杂度。
// 空间复杂度：$O(1)$，不考虑输出数组的话，只使用了常数额外空间。
// /**
//  * @param {number[][]} img
//  * @return {number[][]}
//  */
// var imageSmoother = function (img) {
//   const m = img.length
//   const n = img[0].length
//   const result = new Array(m)

//   // 初始化结果数组
//   for (let i = 0; i < m; i++) {
//     result[i] = new Array(n)
//   }

//   // 遍历每个像素点
//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       let sum = 0
//       let count = 0

//       // 遍历当前像素及其周围的8个像素
//       for (let x = Math.max(0, i - 1); x <= Math.min(m - 1, i + 1); x++) {
//         for (let y = Math.max(0, j - 1); y <= Math.min(n - 1, j + 1); y++) {
//           sum += img[x][y]
//           count++
//         }
//       }

//       // 计算平均值并向下取整
//       result[i][j] = Math.floor(sum / count)
//     }
//   }

//   return result
// }
