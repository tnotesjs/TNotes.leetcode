/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  const n = image.length

  for (let i = 0; i < n; i++) {
    let left = 0
    let right = n - 1

    // 双指针从两端向中间处理
    while (left < right) {
      // 如果两个位置的值不同，翻转并反转后值不变，无需处理
      // 如果两个位置的值相同，翻转并反转后会改变
      if (image[i][left] === image[i][right]) {
        image[i][left] = 1 - image[i][left]
        image[i][right] = 1 - image[i][right]
      }

      left++
      right--
    }

    // 处理奇数长度数组的中间元素
    if (left === right) {
      image[i][left] = 1 - image[i][left]
    }
  }

  return image
}
