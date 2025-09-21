/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function (area) {
  // 从平方根开始向下寻找最大的因数作为宽度
  let w = Math.floor(Math.sqrt(area))

  // 找到能整除area的最大因数
  while (area % w !== 0) {
    w--
  }

  // 计算对应的长度
  let l = area / w

  // 返回 [L, W]
  return [l, w]
}
