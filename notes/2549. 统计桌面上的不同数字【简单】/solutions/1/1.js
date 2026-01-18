/**
 * @param {number} n
 * @return {number}
 */
var distinctIntegers = function (n) {
  // n = 1 时，桌面上只有 1
  // n >= 2 时，最终桌面上会有 2, 3, ..., n，共 n-1 个数字
  return n === 1 ? 1 : n - 1
}
