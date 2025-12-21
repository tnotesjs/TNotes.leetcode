/**
 * @param {number} red
 * @param {number} blue
 * @return {number}
 */
var maxHeightOfTriangle = function (red, blue) {
  // 模拟构建三角形，返回最大高度
  const build = (odd, even) => {
    // odd 用于奇数行，even 用于偶数行
    let height = 0
    let row = 1
    while (true) {
      if (row % 2 === 1) {
        // 奇数行
        if (odd >= row) {
          odd -= row
          height = row
        } else {
          break
        }
      } else {
        // 偶数行
        if (even >= row) {
          even -= row
          height = row
        } else {
          break
        }
      }
      row++
    }
    return height
  }
  // 两种情况：红色在奇数行/蓝色在偶数行，或者相反
  return Math.max(build(red, blue), build(blue, red))
}
