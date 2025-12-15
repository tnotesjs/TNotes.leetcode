/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  const row_num = image.length // 行数
  const col_num = image[0].length // 列数
  const start_color = image[sr][sc] // 开始颜色

  if (start_color === newColor) return image

  // 递归上色
  const fill = (r, c) => {
    if (r < 0 || r >= row_num || c < 0 || c >= col_num) return // 越界
    if (image[r][c] !== start_color) return // 不是开始颜色

    image[r][c] = newColor // 当前位置
    fill(r - 1, c) // 上
    fill(r + 1, c) // 下
    fill(r, c - 1) // 左
    fill(r, c + 1) // 右
  }

  fill(sr, sc) // 从初始坐标开始上色
  return image
}
