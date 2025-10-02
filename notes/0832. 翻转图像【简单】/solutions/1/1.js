/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  const n = image.length
  const m = image[0].length

  // 步骤1：水平翻转每一行
  for (let i = 0; i < n; i++) {
    image[i].reverse()
  }

  // 步骤2：反转图像（0变1，1变0）
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      image[i][j] = 1 - image[i][j]
    }
  }

  return image
}
