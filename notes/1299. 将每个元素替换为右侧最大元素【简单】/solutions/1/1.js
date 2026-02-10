/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  // 记录从右侧开始扫过区域中的最大值
  let mx = -1

  for (let i = arr.length - 1; i >= 0; i -= 1) {
    const cur = arr[i]
    arr[i] = mx
    if (cur > mx) mx = cur
  }

  return arr
}
